import cheerio from 'cheerio';
import fetch from 'node-fetch';
import translate, {DeeplLanguages} from 'deepl';
import {fbPostKeywords} from "../config";

function parsePostsFromPageSource(responseBody: string): string[] {
    const $ = cheerio.load(responseBody.slice(responseBody.indexOf('<html')));
    return $('[data-ft][id] span:has(p)')
        .map(function () {
            return $(this).parent().html()?.replace(/href="/, 'href="https://www.facebook.com')
        })
        .filter(function () {
            const text = $(this).text().toLowerCase();
            return fbPostKeywords.some(keyword => text.includes(keyword));
        }).get();
}

export async function fetchFacebookPosts(locale: string): Promise<string[]> {
    const response = await fetch('https://mbasic.facebook.com/KIK.warszawa/', {
        headers: {
            'User-Agent': 'curl/7.0.52',
        }
    });
    const {DEEPL_API_KEY} = process.env;
    const content = await response.text();
    const posts = parsePostsFromPageSource(content);
    if (!DEEPL_API_KEY) {
        return posts;
    }
    const translatedPosts = await Promise.all(posts.map(text =>
        translate({
            text,
            source_lang: 'PL',
            free_api: true,
            target_lang: locale.toUpperCase() as DeeplLanguages,
            auth_key: DEEPL_API_KEY,
        })
    ))
    return translatedPosts.flatMap(({data}) => data.translations.map(({text}) => text));
}

