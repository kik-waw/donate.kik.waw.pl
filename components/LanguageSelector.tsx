import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const LanguageLink: React.FC = ({ children: localeSource }) => {
    const { query } = useRouter();
    if (typeof localeSource !== "string") {
        throw new Error("<LanguageLink />: children passed to the component must be a string");
    }
    const locale = localeSource.toLowerCase();
    const isActive = query.locale === locale
    return (
        <div className={isActive ? 'language-select active' : 'language-select'}>
            <Link href={`/${locale}`} passHref> 
                <a>{localeSource}</a>
            </Link>
        </div>
    );
};

const Languages: React.FC = () => <div className="text-3xl h-full w-1/2 lg:w-full text-right">
    <div className="flex">
        <LanguageLink>EN</LanguageLink>
        <LanguageLink>PL</LanguageLink>
        <LanguageLink>DE</LanguageLink>
        <div className="kik-page-link">
            <Link href={`https://www.kik.waw.pl/?no_redir=1`} passHref> 
                <a>kik.waw.pl</a>
            </Link>
        </div>
    </div>
</div>


export default Languages;
