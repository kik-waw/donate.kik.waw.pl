import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export type ContentProps = {
    content: string;
}

const Content: React.FC<ContentProps> = ({ content }) => (
    <div className="w-full bg-gray-50">
        <section className="container">
            <div className="content">
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </div>
        </section>
    </div>
);

export default Content;