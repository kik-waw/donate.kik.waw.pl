import cheerio from 'cheerio';
import fetch from 'node-fetch';

function parsePostsFromPageSource(responseBody: string): string[] {
    const $ = cheerio.load(responseBody.slice(responseBody.indexOf('<html')));
    return $('[data-ft][id] span:has(p)')
        .map(function () {
            return $(this).parent().html()?.replace(/href="/, 'href="https://www.facebook.com')
        }).get();
}

export async function fetchFacebookPosts(): Promise<string[]> {
    const response = await fetch('https://mbasic.facebook.com/KIK.warszawa/', {
        headers: {
            'User-Agent': 'curl/7.0.52',
        }
    });
    const content = await response.text();
    return parsePostsFromPageSource(content);
}

