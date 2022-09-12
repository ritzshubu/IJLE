import React, { Fragment, useState, useEffect } from "react";
import NavigationView from "./NavigationComp";
import ArticleView from "./ArticleViewComp";


const AppStatusView = () => {

    const [articles, setArticle] = useState ([]);
    const [tag, setpaperID] = useState ("");

    const searchPapers = async () =>{
        console.log("running")
        try {
            const response = await fetch(`/app/searchArticles/${tag}`);
            const jsonData = await response.json();

            console.log("return")
            setArticle(jsonData);
            console.log(jsonData)

            document.getElementById("searchFormFinal").style.display=("none");
            document.getElementById("publishFormFinal").style.display=("block");


        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        console.log("Hello World");
    }, []);

    const formPreventDefault = (e) => {
        e.preventDefault();
    }

    return(
        <Fragment>
            <NavigationView />

            <div className="dashContent">
                <form onSubmit={formPreventDefault} className="articleSearch" id="searchFormFinal">
                    <input type="text" className="btm_brdr" required onChange={e => setpaperID(e.target.value)} /><br/>
                    <label>Enter keyterms to search for articles</label><br/><br/>
                    <button className="small primary_blue" onClick={searchPapers}>Search</button><br/><br/><br/><br/>
                </form>

                <div className="column large8 medium10 small12 center" id="publishFormFinal" style={{display: "none", marginTop: "-40px"}}>
                    <h5>Search Results</h5>
                    <ul>
                        {articles.map(article =>(
                            <li key={article.paperid} className="searchThumbnail">
                                <h6>{article.papertitle} - {article.paperid}</h6>
                                <p className="abstract">{article.abstract}</p>
                                <ArticleView article={article} />
                                <p className="ta_right">{article.publishedon}</p>
                            </li>
                        ))}
                    </ul>
                    <br/><br/><br/><br/>
                </div>
            </div>
        </Fragment>
    );
}

export default AppStatusView;