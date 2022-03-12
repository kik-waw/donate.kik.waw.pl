import React from "react";
import { BsFacebook } from "react-icons/bs";

export type FacebookPostsProps = {
    t: any;
    posts: string[];
}

const FacebookPosts: React.FC<FacebookPostsProps> = ({ posts, t }) => (
    <div>
        <section className="container">
            <div>
                <h3>{t('News')}</h3>
                <div className="flex flex-wrap">
                    {
                        posts.map((t, i) => (
                            <div className="w-full lg:w-1/2">
                                <div 
                                    key={`news_${i}`} 
                                    className="p-6 md:mr-1 mb-1 text-left border-gray-200 border-solid border rounded" 
                                    dangerouslySetInnerHTML={{__html: t}} 
                                />
                            </div>
                        ))
                    }
                </div>
                <a href='https://www.facebook.com/KIK.Warszawa' className='text-center flex items-center mt-3 text-grayblue'>
                    <BsFacebook className="text-3xl mr-3" />
                    {t('Follow us on facebook')}
                </a>
            </div>
        </section>
    </div>
);

export default FacebookPosts;