import React, { Fragment, useState, useEffect } from "react";
import NavigationView from "./NavigationComp";
import ArticleView from "./ArticleViewComp";
import PaperTitle from "./PaperTitleComp";
const LatestView = () => {

    const[articles, setAllArticles] = useState([]);

    const getLatestArticles = async () =>{
        try {
            const response = await fetch(`/app/latestArticles/articles`);
            const jsonData = await response.json();

            setAllArticles(jsonData);
        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        getLatestArticles();

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

export default LatestView;