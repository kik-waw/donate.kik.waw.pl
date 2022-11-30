import React from "react";
import PaymentButton from "./PaymentButton";
import {useTranslation} from "./i18n";

const BankTransfer: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className="w-full bg-grayblue">
            <section className="container about text-white">
                <div className="w-full">
                    <h2 className="mb-12">{t('Support us via a wire transfer!')}</h2>
                    <ul className="w-full">
                        <li>
                            <b>{t('Klub Inteligencji Katolickiej')}</b><br/>
                            <b>{t('Transfer title')}:</b><br/> Darowizna na cele statutowe - ukraina <br/>
                            <b>SWIFT:</b> <br/>BREXPLPWXXX <br/>
                            <b>PLN IBAN:</b> <br/>PL69 1140 2062 0000 4445 3900 1005 <br/>
                            <b>EUR IBAN:</b> <br/>PL47 1140 2062 0000 4445 3900 1013 <br/>
                            <b>USD IBAN:</b> <br/>PL90 1140 2062 0000 4445 3900 1015 <br/>
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
