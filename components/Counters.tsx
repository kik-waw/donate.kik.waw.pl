import React from "react";
import Counter from "./Counter";
import { useTranslation } from "./i18n";

const Counters: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className="w-full bg-specialyellow text-grayblue" id="content">
            <section className="container text-grayblue about">
                <div>
                    <h2 className="text-grayblue pb-4">{t('What we did')}</h2>
                    <Counter number={750}>{t('We evacuated')}</Counter>
                    <Counter number={170}>{t('We created base')}</Counter>
                    <Counter number={700}>{t('We hosted')}</Counter>
                    <Counter number={200}>{t('We sent')}</Counter>
                    <Counter number={200}>{t('We conduct afternoon club acivities')}</Counter>
                    <Counter number={270}>{t('School')}</Counter>
                    <Counter number={320}>{t('Summer camp')}</Counter>
                    <Counter number={800}>{t('City summer camp')}</Counter>
                    <Counter number={1}>{t('Icons camp')}</Counter>
                    <Counter number={90}>{t('Therapeutic camp')}</Counter>
                    <Counter number={700}>{t('Volunteers')}</Counter>
                    <Counter number={1000}>{t('Donnors')}</Counter>
                </div>
            </section>
        </div>
    );
}

export default Counters;