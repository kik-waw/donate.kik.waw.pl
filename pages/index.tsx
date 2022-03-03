import type {NextPage} from 'next'
import Head from 'next/head'
import {LanguageSwitcher, useTranslation} from "next-export-i18n";
import type React from "react";

const ButtonStyle = "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";

const Languages: React.FC = () => <div className="text-xl bg-opacity-20 bg-black">
    <LanguageSwitcher lang='en'>EN</LanguageSwitcher>{" / "}
    <LanguageSwitcher lang='pl'>PL</LanguageSwitcher>{" / "}
    <LanguageSwitcher lang='de'>DE</LanguageSwitcher>
</div>

const Home: NextPage = () => {
    const {t} = useTranslation();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>{t('Donate to KIK')}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="background w-full text-white text-center">
                <nav id="header" className="w-full text-white py-1 lg:py-6">
                    <div
                        className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
                    >
                        <img src="./logo-kik-contra-md.png" alt="logo Klubu Inteligencji Katolickiej w Warszawie"
                             height={100} width={144}/>
                    </div>
                </nav>
                <section className="flex flex-col justify-between h-48 mb-24">
                    <Languages/>
                    <h1 className="text-6xl font-bold bg-opacity-20 px-6 bg-black">
                        {t('Help ukraine relief efforts')}
                    </h1>
                    <div className={"text-2xl mt-4 flex flex-col justify-between"}>
                        <p className="pt-4 pb-2">
                            <a href="https://zrzutka.pl/en/eb8wg7/wplac" className={ButtonStyle}>
                                {t('Donate now call to action')}
                            </a>
                        </p>
                        <p className="text-sm">
                            powered by <a href="//zrzutka.pl" className="underline" rel="nofollow noopener">zrzutka.pl</a>
                        </p>
                    </div>
                </section>
            </div>
            <main className="flex w-full flex-1 flex-col items-center justify-center py-20 px-4 text-center">
                <article className="max-w-4xl text-justify">
                    <h2>{t('Club of Catholic Intelligentsia and Ukraine')}</h2>
                    {t('Club of Catholic Intelligentsia (KIK) is an association founded in 1956 grouping c.a. 2000 Catholic intellectuals with the aim to promote and develop everyday service for the society and the Church. The important role of the Club is also to provide proper education for youth and necessary help for the poor and the ones in need. KIK’s members are very active in supporting democratic changes in Eastern European countries, especially in Ukraine and Belarus.')}
                    {t('Our collaboration with organisations in the eastern part of Eastern Europe started in the 80s. Here are the most important activities in recent years for Ukraine.')}
                    <h3>{t('2014 EuroMajdan and War in the East')}</h3>
                    {t('During large scale protests in Ukraine in 2014, called Dignity Revolution, we collected over 25,000 EUR for the purchase of specialist medical equipment for the Medics of Majdan. We organised and delivered to Ukraine for protesters a field hospital with 40 beds and necessary equipment and a shipment of bulletproof vests and helmets.')}
                    {t('Also, we supported heavily wounded who thanks to our cooperation with Polish local governments were treated in Polish hospitals, whereas families of our KIK members accepted them in their homes for the initial stages of convalescence.')}
                    {t('Since 2014 we have been organising in Poland therapeutic and recreation camps for Ukrainian children - victims of military conflict in their country. This initiative has been repeated 6 times and included hundreds of children and teenagers.')}
                    <h3>{t('Culture, Dialogue and Education')}</h3>
                    {t('KIK organised - together with Ukrainian organisations - numerous exhibitions, cultural and artistic events for young people from Ukraine and Ukrainian and Polish artists. There were also meetings and conferences for intellectuals and activists from the whole Eastern European region. There were organised special training sessions for Ukrainian social workers and educators to help solving social problems, particularly for groups of internal refugees in Ukraine.')}
                    <h3>{t('Medical Help and Charity')}</h3>
                    {t('Our organisation delivered vaccinations and medicines to Ukrainian hospitals as well as trainings for volunteers to care of elderly people in Caritas centres in Central Ukraine. In 2016, we organised in Poland training visits for Ukrainian doctors to enhance their professional development.')}
                    <p>{t('In addition to our help and support for Ukraine, we have been working with Belarusian organisations supporting independent schools and organising various educational training trips for young Belarusians. In recent years, we have been also engaged in humanitarian projects in Syria and the Iraqi Kurdistan. In 2021 KIK organised a humanitarian centre close to the Polish-Byelorussian border where for the last five months we have been offering legal and humanitarian aid for migrants and refugees.')}</p>
                    <p>{t('The members of the KIK have been awarded many times for their involvement by the Polish and Ukrainian authorities. Over the years, we have managed to create a database of trusted partners in Poland, Ukraine and Belarus.')}</p>
                </article>
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                {t('Organized by')}&nbsp;
                <a href="https://kik.waw.pl" className={"underline"}>{t('Klub Inteligencji Katolickiej')}</a>
            </footer>
        </div>
    )
}

export default Home
