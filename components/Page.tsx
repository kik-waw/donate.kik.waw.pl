import Head from 'next/head'
import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import getNavigatorLanguage from "./getNavigatorLanguage";
import {homepageURL} from "../config";
import PageHeader from './PageHeader';
import PaymentCallToAction from './PaymentCallToAction';
import About from './About';
import FacebookPosts from './FacebookPosts';
import Content from './Content';
import BankTransfer from './BankTransfer';

const TranslationContext = React.createContext((t: string): string => (''));

const useTranslation = () => {
    const t = React.useContext(TranslationContext);
    return { t };
}


export type PageProps = {
    posts: string[];
    bottomText: string;
    topText: string;
    aboutText: string;
    translations: Record<string, string>;
};

const Page: React.FC<PageProps> = ({ posts, bottomText, topText,  aboutText, translations }) => {
    const t = (key: string): string => translations[key] || key;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <TranslationContext.Provider value={t}>
            <Head>
                <title>{t('Help ukraine')} {t('relief efforts')} | {t('Klub Inteligencji Katolickiej')}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className="background w-full text-white text-center">
                <PageHeader title={t('Help ukraine')} subtitle={ t('relief efforts')}/>
            </div>
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center" id='content'>
                <PaymentCallToAction
                    title={t('Help ukraine relief efforts')}
                    content={topText}
                    cta={t('Donate now call to action')}
                />
                <About about={aboutText} />
                <FacebookPosts t={t} posts={posts} />
                <Content content={bottomText} />
                <BankTransfer 
                    title={t('Support us via a wire transfer!')}
                    reciever={t('Klub Inteligencji Katolickiej')}
                    transferTitle={t('Transfer title')}
                    cta={t('Donate now call to action')}
               />
            </main>
            <footer className="flex p-5 w-full items-center justify-center border-t">
                {t('Organized by')}&nbsp;
                <a href={homepageURL} className={"underline"}>
                    {t('Klub Inteligencji Katolickiej')}
                </a>
            </footer>
        </TranslationContext.Provider>
        </div>
    )
}

export default Page


