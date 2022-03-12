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
        <section className='w-full text-left max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl  py-32 px-4 flex mx-auto'>
            <div className="md:w-1/2">
                <h2 className="text-3xl text-left">
                    {title}
                </h2>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <div className="flex items-center justify-center md:w-1/2">
                <PaymentButton cta={cta} />
            </div>
        </section>
    </div>
);

export default PaymentCallToAction