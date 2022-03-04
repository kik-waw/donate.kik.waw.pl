import type React from "react";
import Head from 'next/head'
import {LanguageSwitcher, useTranslation} from "next-export-i18n";

const ButtonStyle = "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";

const Languages: React.FC = () => <div className="text-xl h-full">
    <LanguageSwitcher lang='en'>en</LanguageSwitcher>{" / "}
    <LanguageSwitcher lang='pl'>pl</LanguageSwitcher>{" / "}
    <LanguageSwitcher lang='de'>de</LanguageSwitcher>
</div>

export default () => {
    const {t} = useTranslation();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>{t('Donate to KIK')}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="background w-full text-white text-center">
                <nav id="header" className="max-w-5xl mx-auto flex flex-row flex-nowrap justify-between items-center p-2 lg:py-6">
                    <img src="./kik-logo-rect.png" alt="logo Klubu Inteligencji Katolickiej w Warszawie"
                             height={132} width={200}/>
                    <Languages/>
                </nav>
                <section className="flex flex-col justify-between h-48 mb-24">
                    <h1 className="text-6xl font-bold px-6">
                        {t('Help ukraine')}<br />
                        {t('relief efforts')}
                    </h1>
                    <div className={"text-3xl mt-4 flex flex-col justify-between"}>
                        <p className="pt-4 pb-2">
                            <a href="https://zrzutka.pl/en/eb8wg7/wplac" className={ButtonStyle}>
                                {t('Donate now call to action')}
                            </a>
                        </p>
                        <p className="text-sm">
                            {t('powered by')} <a href="//zrzutka.pl" className="underline" rel="nofollow noopener">zrzutka.pl</a>
                        </p>
                    </div>
                </section>
            </div>
            <main className="flex w-full flex-1 flex-col items-center justify-center py-20 px-4 text-center">
                <article className="max-w-2xl text-justify">
                    <h2>{t('Club of Catholic Intelligentsia and Ukraine')}</h2>
                    <p>{t('Club of Catholic Intelligentsia (KIK) is an association')}</p>
                    <p>{t('Our collaboration with organisations')}</p>
                    <h3>{t('2014 EuroMajdan and War in the East')}</h3>
                    {t('During large scale protests in Ukraine in 2014')}
                    {t('Also, we supported heavily wounded who thanks')}
                    {t('Since 2014 we have been organising in Poland')}
                    <h3>{t('Culture, Dialogue and Education')}</h3>
                    {t('KIK organised - together with Ukrainian organisations')}
                    <h3>{t('Medical Help and Charity')}</h3>
                    {t('Our organisation delivered vaccinations')}
                    <p>{t('In addition to our help and support for Ukraine')}</p>
                    <p>{t('The members of the KIK have been awarded')}</p>
                    <p>{t('')}</p>
                </article>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                {t('Organized by')}&nbsp;
                <a href="https://kik.waw.pl" className={"underline"}>{t('Klub Inteligencji Katolickiej')}</a>
            </footer>
        </div>
    )
}
