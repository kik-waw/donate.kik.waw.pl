import React from "react";
import Counter from "./Counter";
import { useTranslation } from "./i18n";

const Counters: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className="w-full bg-specialyellow text-grayblue" id="content">
            <section className="container text-white about">
                <div>
                    <h2 className="text-grayblue pb-4">{t('What we did')}</h2>
                    <Counter number={600}>{t('We evacuated')}</Counter>
                    <Counter number={400}>{t('We hosted')}</Counter>
                    <Counter number={140}>{t('We created base')}</Counter>
                    <Counter number={10}>{t('We sent')}</Counter>
                    <Counter number={4}>{t('We conduct afternoon club acivities')}</Counter>
                    <Counter number={400}>{t('Volunteers')}</Counter>
                </div>
            </section>
        </div>
    );
}

export default Counters;