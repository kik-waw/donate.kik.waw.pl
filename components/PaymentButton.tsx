import React from "react";

export type PaymentButtonProps = {
 cta: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ cta }) => (
    <a 
        href="https://zrzutka.pl/en/eb8wg7/wplac" 
        className="block w-4/5 text-center bg-specialyellow text-grayblue px-3 py-4 rounded-full shadow-md hover:bg-grayblue hover:text-specialyellow transition ease-in-out duration-300 text-xl"
    >
        {cta}
    </a>
);

export default PaymentButton;