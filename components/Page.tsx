import {GetStaticPropsContext} from "next";
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import {fetchFacebookPosts} from "./scraper";

const homepageURL = "https://www.kik.waw.pl/?no_redir=1";

const LanguageLink: React.FC = ({ children: locale }) => {
    const { query } = useRouter();
    const isActive = query.locale === locale;
    return <Link href={`/${locale}`} passHref><a className={isActive ? 'underline' : ''}>{locale}</a></Link>;
};

const Languages: React.FC = () => <div className="text-3xl h-full w-1/2 lg:w-full text-right">
    <LanguageLink>en</LanguageLink>{" / "}
    <LanguageLink>pl</LanguageLink>{" / "}
    <LanguageLink>de</LanguageLink>
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
    translations: Record<string, string>;
};

const Page: React.FC<PageProps> = ({ posts, bottomText, topText, translations }) => {
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
                <nav id="header" className="header">
                    <Logo />
                    <GoBackButton />
                    <Languages />
                </nav>
                <section className="flex flex-col justify-between mb-24">
                    <h1 className="text-3xl font-bold px-6 lg:text-6xl">
                        {t('Help ukraine')}<br/>
                        {t('relief efforts')}
                    </h1>
                    <DonateButtonSection/>
                    <p className="mt-6">
                        <a href="#bank" className="underline">
                            {t('Support us via a wire transfer!')}
                        </a>
                    </p>
                </section>
            </div>
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <div className="flex flex-nowrap">
                    <div className="w-1/2">
                        <ReactMarkdown>{topText}</ReactMarkdown>
                    </div>
                    <div className="w-1/2">
                        <h3>{t('News')}</h3>
                        {posts.map((t, i) => <div key={`news_${i}`} className="border-2 border-gray-300 p-4 text-left m-4" dangerouslySetInnerHTML={{__html: t}} />)}
                        <a href='https://www.facebook.com/KIK.Warszawa' className='underline text-center'>{t('Follow us on facebook')}</a>
                    </div>
                </div>
                <article className="max-w-2xl text-justify py-20 px-4">
                    <ReactMarkdown>{bottomText}</ReactMarkdown>
                </article>
                <section className="bg-indigo-100 w-full px-4 pb-12">
                    <h3 className="max-w-2xl mx-auto lg:text-6xl">{t('Support us via a wire transfer!')}</h3>
                    <article id="bank" className="max-w-lg mx-auto text-left">
                        <p className='mb-4'>
                            {t('Klub Inteligencji Katolickiej')}
                        </p>
                        <p className='mb-4'>
                            <strong>mBank SWIFT</strong>: BREXPLPWXXX
                        </p>
                        <p className='mb-4'><strong>PLN IBAN:</strong><br/>
                            <code>PL69 1140 2062 0000 4445 3900 1005</code><br/>
                            {t('Transfer title')}: darowizna na cele statutowe - ukraina
                        </p>
                        <p className='mb-4'><strong>EUR IBAN:</strong><br/>
                            <code>PL47 1140 2062 0000 4445 3900 1013</code>
                        </p>
                        <p className='mb-12'><strong>USD IBAN:</strong><br/>
                            <code>PL90 1140 2062 0000 4445 3900 1015</code>
                        </p>
                        <DonateButtonSection/>
                    </article>
                </section>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
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


