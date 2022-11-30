import React from "react";
import PaymentButton from "./PaymentButton";
import {useTranslation} from "./i18n";

const BankTransfer: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className="w-full bg-grayblue">
            <section className="container about text-white">
                <div>
                    <h2 className="mb-12">{t('Support us via a wire transfer!')}</h2>
                    <ul className="">
                        <li>
                            {t('Klub Inteligencji Katolickiej')}</br>
                            <b>{t('Transfer title')}:</b> darowizna na cele statutowe - ukraina </br>
                            <b>SWIFT:</b> BREXPLPWXXX </br>
                            <b>PLN IBAN:</b> PL69 1140 2062 0000 4445 3900 1005 <br/>
                            <b>EUR IBAN:</b> PL47 1140 2062 0000 4445 3900 1013 <br/>
                            <b>USD IBAN:</b> PL90 1140 2062 0000 4445 3900 1015 <br/>
                        </li>
                    </ul>
                    <div className="w-4/5 md:w-1/2 mt-6">
                        <PaymentButton />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BankTransfer;
