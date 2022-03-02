import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {LanguageSwitcher, useLanguageQuery, useTranslation} from "next-export-i18n";
import type React from "react";

const ButtonStyle = "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";


const Home: NextPage = () => {
  const { t } = useTranslation();
  const [ query ] = useLanguageQuery();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>{t('Donate to KIK')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background w-full h-[40rem] text-white text-center">
      <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
        <div
            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
        >
          <img src="/logo-kik-contra-md.png" height={100} width={144} />
        </div>
          <LanguageSwitcher lang='fr'>J'e mappel</LanguageSwitcher> / <LanguageSwitcher lang='de'>Herzlich Wilkomenn</LanguageSwitcher> </nav>
        <h1 className="text-6xl font-bold">
          {t('Help ukraine relief efforts')}
        </h1>
        <p className={"text-2xl mt-4"}>
            <a href="/donate" className={ButtonStyle}>
                {t('Donate now call to action')}
            </a>
        </p>
      </div>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mt-6 max-w-4xl sm:w-full">
            <div className="flex flex-row justify-center sm:flex-column">
                <div className="w-1/2">
                    Image
                </div>
                <div className="w-1/2 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula pellentesque placerat. Fusce dapibus suscipit facilisis. Nulla vestibulum lorem eu dolor ultrices dapibus. Integer vel cursus felis, id rutrum tortor. Integer dignissim fermentum vestibulum. Quisque condimentum condimentum ligula vel gravida. Cras quis sagittis elit, nec commodo ligula. Praesent a quam lorem. Integer fringilla ipsum ut metus convallis condimentum. Nullam rhoncus turpis vitae tortor placerat elementum. Sed ut ante nec dui dictum eleifend. Suspendisse at rhoncus lacus, at venenatis purus. Cras faucibus a sapien ac fermentum. Aliquam viverra laoreet enim, sed molestie massa tristique at. Proin ante nunc, molestie quis leo eu, molestie tincidunt massa.
                </div>
            </div>
            <div className="flex flex-row-reverse flex-1 justify-center sm:flex-column">
                <div className="w-1/2">
                    Image
                </div>
                <div className="w-1/2 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula pellentesque placerat. Fusce dapibus suscipit facilisis. Nulla vestibulum lorem eu dolor ultrices dapibus. Integer vel cursus felis, id rutrum tortor. Integer dignissim fermentum vestibulum. Quisque condimentum condimentum ligula vel gravida. Cras quis sagittis elit, nec commodo ligula. Praesent a quam lorem. Integer fringilla ipsum ut metus convallis condimentum. Nullam rhoncus turpis vitae tortor placerat elementum. Sed ut ante nec dui dictum eleifend. Suspendisse at rhoncus lacus, at venenatis purus. Cras faucibus a sapien ac fermentum. Aliquam viverra laoreet enim, sed molestie massa tristique at. Proin ante nunc, molestie quis leo eu, molestie tincidunt massa.
                </div>
            </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        {t('Organized by Klub Inteligencji Katolickiej')}
      </footer>
    </div>
  )
}

export default Home
