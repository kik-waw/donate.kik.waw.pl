import React from 'react';
import Languages from './LanguageSelector';
import {useRouter} from "next/router";

export type HeaderProps = {
    title: string;
    subtitle: string;
}

const PageHeader: React.FC<HeaderProps> = ({ title, subtitle }) => (
    <header className="h-180 flex justify-center items-center background" >
        <nav className='absolute right-0 top-0'>
            <Languages />
        </nav>
        <div className='flex flex-col md:flex-row items-center'>
            <img className='logo mr-0 md:mr-5 mb-3 md:mb-0' src='./kik-logo-rect.png' alt='logo'/>
            <h1 className='text-3xl px-6 lg:text-5xl text-center md:text-left'>{title}<br/>{subtitle}</h1>
        </div>
    </header>
);

export default PageHeader;