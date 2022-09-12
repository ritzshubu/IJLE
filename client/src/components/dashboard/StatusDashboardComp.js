import React, { Fragment, useState, useEffect } from "react";
import DashboardSideMenuView from "./DashboardSideMenuComp";
import { NavLink } from "react-router-dom";
import DonwloadForReview from "./DownloadForReviewComp";
import DeleteUnpublished from "./DeleteUnpublished";

const StatusDashboardView = () => {

    const [articles, setArticles] = useState ([]);

    const loadUnpublishedPapers = async () =>{
        try {
            const response = await fetch(`/app/editorUnpublished/articles`);
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
                <h5>Unpublished Articles</h5>
                    <div className="table_container">  
                        <table className="dlevel2">  
                            <thead>  
                                <tr>  
                                    <th className="secondary_blue">Paper ID</th>  
                                    <th className="secondary_blue">Paper Title</th>  
                                    <th className="secondary_blue">Paper Author</th>  
                                    <th className="secondary_blue">Applied On</th>  
                                    <th className="secondary_blue">Application Status</th>  
                                    <th className="secondary_blue">Draft Copy</th>  
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
                                        <td>{article.appliedon}</td>
                                        <td>{article.appstatus}</td>
                                        <td><DonwloadForReview article={article}/></td>
                                        <td className="abstractShort">{article.abstract}</td>
                                        <td>
                                            <NavLink className="button primary_green" to="/app/dsfge35efbasd334aaGXG909dfhgcc$22PublishDashboard">Publish</NavLink>
                                            <DeleteUnpublished article={article}/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>  
                        </table>  
                    </div>
                </div>
    </Fragment>
    );
}

export default StatusDashboardView;