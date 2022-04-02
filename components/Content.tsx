import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Content: React.FC<{ children: string }> = ({ children }) => (
    <div className="w-full bg-gray-50">
        <section className="container">
            <div className="content">
                <ReactMarkdown>
                    {children}
                </ReactMarkdown>
            </div>
        </section>
    </div>
);

export default Content;
