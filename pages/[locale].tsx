import React from "react";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import fs from "fs";
import Page, {type PageProps} from "../components/Page";
import {fetchFacebookPosts} from "../components/scraper";
import {locales} from "../config";

const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: locales.map(locale => ({params: {locale}})),
        fallback: false
    }
};

const getStaticProps: GetStaticProps = async ({ params }) => {
    if (typeof params?.locale !== 'string') {
        throw new Error('No locale provided');
    }
    const { locale } = params;
    const translationsFile = `./i18n/${locale}.json`;
    const topTextFile = `./content/top-text.${locale}.md`;
    const bottomTextFile = `./content/bottom-text.${locale}.md`;

    if (![translationsFile, topTextFile, bottomTextFile].every(fs.existsSync)) {
        return {
            notFound: true,
        }
    }

    const file = (path: string) => fs.readFileSync(path, { encoding: 'utf8'});
    const translations = JSON.parse(file(translationsFile));

    return {
        props: {
            posts: await fetchFacebookPosts(locale || ''),
            bottomText: file(bottomTextFile),
            topText: file(topTextFile),
            translations
        }
    }
}

const PageWithLocale: NextPage<PageProps> = (props) => <Page {...props} />;

export default PageWithLocale;
export {
    getStaticProps,
    getStaticPaths,
};
