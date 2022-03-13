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
                        <li>{t('Klub Inteligencji Katolickiej')}</li>
                        <li><b>{t('Transfer title')}:</b><br/> darowizna na cele statutowe - ukraina</li>
                        <li><b>SWIFT:</b><br/> BREXPLPWXXX</li>
                        <li><b>PLN IBAN:</b><br/> PL69 1140 2062 0000 4445 3900 1005</li>
                        <li><b>EUR IBAN:</b><br/> PL47 1140 2062 0000 4445 3900 1013</li>
                        <li><b>USD IBAN:</b><br/>PL90 1140 2062 0000 4445 3900 1015</li>
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
