import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export type AboutProps = {
    about: string;
}

const About: React.FC<AboutProps> = ({ about }) => (
    <div className="bg-grayblue w-full">
        <section className="container text-white about">
            <div>
                <ReactMarkdown>{about}</ReactMarkdown>
            </div>
        </section>
    </div>
);

export default About;