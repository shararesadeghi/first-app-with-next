import React from 'react';
import { useRouter } from 'next/router';

const Article = () => {

    const router = useRouter();
    const slugs =router.query || [];

    if(slugs.length > 1){
        return <h3>This article is written by {slugs[0]} at {slugs[1]}/{slugs[2]}/{slugs[3]} . and the name of article is {slugs[4]}</h3>
    }
    return (
        <h1>
           Article 
        </h1>
    );
};

export default Article;