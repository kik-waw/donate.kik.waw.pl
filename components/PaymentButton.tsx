import React from "react";
import {useTranslation} from "./i18n";

const PaymentButton: React.FC = () => {
    const { t } = useTranslation();
    return (
        <a
            href="https://zrzutka.pl/en/eb8wg7/wplac"
            className="block w-4/5 text-center bg-specialyellow text-grayblue px-3 py-4 rounded-full shadow-md hover:bg-grayblue hover:text-specialyellow transition ease-in-out duration-300 text-xl"
        >
            {t('Donate now call to action')}
        </a>
    );
};

export default PaymentButton;
