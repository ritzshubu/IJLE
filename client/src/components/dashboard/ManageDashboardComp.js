import React, { Fragment, useState, useEffect } from "react";
import DashboardSideMenuView from "./DashboardSideMenuComp";
import { NavLink } from "react-router-dom";
import DonwloadFinal from "./DownloadFinal";
import DeleteFinal from "./DeleteFinal";

const ManageDashboardView = () => {

    const [articles, setArticles] = useState ([]);

    const loadUnpublishedPapers = async () =>{
        console.log("running")
        try {
            const response = await fetch(`/app/editorPublished/articles`);
            const jsonData = await response.json();

            setArticles(jsonData);

            console.log(jsonData);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        loadUnpublishedPapers();
    }, []);

    return(
        <Fragment>
                <DashboardSideMenuView/>
                
                <div className="dashContent">
                <br/><br/><br/>
                <h5>Published Articles</h5>
                    <div className="table_container">  
                        <table className="dlevel2">  
                            <thead>  
                                <tr>  
                                    <th className="secondary_blue">Paper ID</th>  
                                    <th className="secondary_blue">Paper Title</th>  
                                    <th className="secondary_blue">Paper Author</th>  
                                    <th className="secondary_blue">Published On</th>  
                                    <th className="secondary_blue">Application Status</th>  
                                    <th className="secondary_blue">Published Copy</th>  
                                    <th className="secondary_blue">Paper Abstract</th> 
                                    <th className="secondary_blue">Actions</th> 
                                </tr>  
                            </thead>  
                            <tbody>  
                                {articles.map(article =>(
                                    <tr key={article.id} className="neulist">
                                        <td>{article.paperid}</td>
                                        <td>{article.papertitle}</td>
                                        <td>{article.authname}</td>
                                        <td>{article.publishedon}</td>
                                        <td>{article.appstatus}</td>
                                        <td><DonwloadFinal article={article}/></td> 
                                        <td className="abstractShort">{article.abstract}</td>
                                        <td><DeleteFinal article={article}/></td>
                                    </tr>
                                ))}
                            </tbody>  
                        </table>  
                    </div>
                </div>
    </Fragment>
    );
}

export default ManageDashboardView;