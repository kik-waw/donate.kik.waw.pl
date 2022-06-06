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
                    <Counter number={750}>{t('We evacuated')}</Counter>
                    <Counter number={700}>{t('We hosted')}</Counter>
                    <Counter number={170}>{t('We created base')}</Counter>
                    <Counter number={12}>{t('We sent')}</Counter>
                    <Counter number={300}>{t('We conduct afternoon club acivities')}</Counter>
                    <Counter number={700}>{t('Volunteers')}</Counter>
                    <Counter number={300}>{t('School')}</Counter>
                </div>
            </section>
        </div>
    );
}

export default Counters;