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

const LanguageLink: React.FC = ({ children: locale }) => {
    const { query } = useRouter();
    const isActive = query.locale === locale;
    return <Link href={`/${locale}`} passHref><a className={isActive ? 'underline' : ''}>{locale}</a></Link>;
};

const Languages: React.FC = () => <div className="text-3xl h-full w-1/2 lg:w-full text-right">
    <LanguageLink>EN</LanguageLink>{" / "}
    <LanguageLink>PL</LanguageLink>{" / "}
    <LanguageLink>DE</LanguageLink>
</div>

const TranslationContext = React.createContext((t: string): string => (''));

const useTranslation = () => {
    const t = React.useContext(TranslationContext);
    return { t };
}

const DonateNowButton: React.FC = () => {
    const style = "bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
    const {t} = useTranslation();
    return <a href="https://zrzutka.pl/en/eb8wg7/wplac" className={style}>
        {t('Donate now call to action')}
    </a>;
}

const DonateButtonSection: React.FC = () => {
    const {t} = useTranslation();
    return <div className={"text-3xl mt-4 flex flex-col justify-between text-center"}>
        <p className="pt-4 pb-2">
            <DonateNowButton/>
        </p>
        <p className="text-sm">
            {t('powered by')}&nbsp;
            <a href="https://zrzutka.pl" className="underline" rel="nofollow noopener">
                zrzutka.pl
            </a>
        </p>
    </div>
};

const GoBackButton: React.FC = () => {
    const {t} = useTranslation();
    return <a href={homepageURL} className={"text-2xl text-center underline w-full order-last lg:order-none"}>{t('Go back to')} kik.waw.pl</a>
};

const Logo: React.FC = () => <a href={homepageURL} className="w-1/2 lg:w-full">
    <img src="./kik-logo-rect.png" alt="logo Klubu Inteligencji Katolickiej w Warszawie" className="logo"/>
</a>

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


