import React from "react";
import PaymentButton from "./PaymentButton";

export type BankTransferProps = {
    title: string;
    reciever: string;
    transferTitle: string;
    cta: string;
}

const BankTransfer: React.FC<BankTransferProps> = ({ title, reciever, transferTitle, cta }) => (
    <div className="w-full bg-grayblue">
        <section className="container about text-white">
            <div>
                <h2 className="mb-12">{title}</h2>
                <ul className="">
                    <li>{reciever}</li>
                    <li><b>{transferTitle}:</b><br/> darowizna na cele statutowe - ukraina</li>
                    <li><b>SWIFT:</b><br/> BREXPLPWXXX</li>
                    <li><b>PLN IBAN:</b><br/> PL69 1140 2062 0000 4445 3900 1005</li>
                    <li><b>EUR IBAN:</b><br/> PL47 1140 2062 0000 4445 3900 1013</li>
                    <li><b>USD IBAN:</b><br/>PL90 1140 2062 0000 4445 3900 1015</li>
                </ul>
                <div className="w-4/5 md:w-1/2 mt-6">
                    <PaymentButton cta={cta}/>
                </div>
            </div>
        </section>
    </div>
);

export default BankTransfer;