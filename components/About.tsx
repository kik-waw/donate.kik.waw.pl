import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const About: React.FC<{ children: string }> = ({ children }) => (
    <div className="bg-grayblue w-full">
        <section className="container text-white about">
            <div>
                <ReactMarkdown>{children}</ReactMarkdown>
            </div>
        </section>
    </div>
);

export default About;
