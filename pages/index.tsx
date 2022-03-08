import {useRouter} from "next/router";
import React from "react";
import getNavigatorLanguage from "../components/getNavigatorLanguage";

const Page = () => {
    const router = useRouter();

    React.useEffect(() => {
        const language = getNavigatorLanguage();
        router.push(`/${language}`);
    });

    return <>
        <meta httpEquiv="refresh" content="1; url=/en" />
    </>
}

export default Page;
