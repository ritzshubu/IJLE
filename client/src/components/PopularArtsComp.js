import React, { Fragment, useState, useEffect } from "react";
import NavigationView from "./NavigationComp";
import ArticleView from "./ArticleViewComp";
import PaperTitle from "./PaperTitleComp";

const PopularView = () => {

    const[articles, setArticles] = useState([]);

    const getLatestArticles = async () =>{
        try {
            const response = await fetch(`/app/popularArticles/articles`);
            const jsonData = await response.json();

            setArticles(jsonData);

            console.log(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getLatestArticles();

//        document.querySelector('p.abstract').innerText = truncateText('p.abstract', 400);
    }, []);

    return(
        <Fragment>
            <NavigationView/>
            <div className="page_container">
                <ul>
                    {articles.map(article =>(
                        <li key={article.paperid} className="thumbnail">
                            <PaperTitle article={article}/>
                            <p className="abstract">{article.abstract}</p>
                            <ArticleView article={article} />
                            <p className="ta_right">{article.publishedon}</p>
                        </li>
                    ))}
                </ul>
                <br/><br/><br/><br/>
            </div>

        </Fragment>
    );
}

export default PopularView;