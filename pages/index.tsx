import {useRouter} from "next/router";
import {type NextPage} from "next";
import React from "react";
import getNavigatorLanguage from "../components/getNavigatorLanguage";
import LocalePage, {getStaticProps as localeGetStaticProps} from './[locale]';
import {PageProps} from "../components/Page";

const Page: NextPage<PageProps> = (props) => {
    const router = useRouter();

    React.useEffect(() => {
        const language = getNavigatorLanguage();
        router.push(`/${language}`);
    });

    return <LocalePage {...props} />
}

export async function getStaticProps() {
    return localeGetStaticProps({ params: { locale: 'en' }})
}

export default Page;
