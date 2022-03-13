import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PaymentButton from "./PaymentButton";
import {useTranslation} from "./i18n";

const PaymentCallToAction: React.FC<{ children: string }> = ({ children }) => {
    const {t} = useTranslation();
    return (
        <div className="background-pattern w-full">
            <section className='container'>
                <div className="md:w-1/2">
                    <h2 className="text-3xl">
                        {t('Help ukraine relief efforts')}
                    </h2>
                    <ReactMarkdown>{children}</ReactMarkdown>
                </div>
                <div className="flex items-center justify-center md:w-1/2 mt-8 md:mt-0">
                    <PaymentButton />
                </div>
            </section>
        </div>
    );
};

export default PaymentCallToAction
