import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PaymentButton from "./PaymentButton";

export type PaymentCallToActionProps = {
    title: string,
    content: string,
    cta: string
}

const PaymentCallToAction: React.FC<PaymentCallToActionProps> = ({ title, content, cta }) => (
    <div className="background-pattern w-full">
        <section className='container'>
            <div className="md:w-1/2">
                <h2 className="text-3xl">
                    {title}
                </h2>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <div className="flex items-center justify-center md:w-1/2 mt-8 md:mt-0">
                <PaymentButton cta={cta} />
            </div>
        </section>
    </div>
);

export default PaymentCallToAction