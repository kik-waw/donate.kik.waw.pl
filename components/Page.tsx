import Head from 'next/head'
import React from "react";
import {homepageURL} from "../config";
import PageHeader from './PageHeader';
import PaymentCallToAction from './PaymentCallToAction';
import About from './About';
import Content from './Content';
import BankTransfer from './BankTransfer';
import {TranslationContext} from "./i18n";
import Counters from './Counters';

export type PageProps = {
    bottomText: string;
    topText: string;
    aboutText: string;
    translations: Record<string, string>;
};

const Page: React.FC<PageProps> = ({ bottomText, topText,  aboutText, translations }) => {
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
                <PageHeader />
            </div>
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <PaymentCallToAction>{topText}</PaymentCallToAction>
                <About>{aboutText}</About>
                <Counters />
                <Content>{bottomText}</Content>
                <BankTransfer />
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


