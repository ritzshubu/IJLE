import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavigationView from "./NavigationComp";


const AppStatusView = () => {

    const [articles, setArticle] = useState ([]);
    const [paperID, setpaperID] = useState ("");

    const loadUnpublishedPapers = async () =>{
        console.log("running")
        try {
            const response = await fetch(`/app/status/${paperID}`);
            const jsonData = await response.json();

            setArticle(jsonData);
            console.log(jsonData)

            document.getElementById("appSuccessModal").style.display=("block");


            if(jsonData.length===0){
                document.getElementById("fail").style.display=("block");
            }else{
                document.getElementById("success").style.display=("block");
            }


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
            <NavigationView/>

            <div className="dashContent" style={{marginTop: "-100px"}}>
                <form onSubmit={formPreventDefault} className="pidSearch" id="searchFormFinal">
                    <h3>Check Article Status</h3><br/><br/>
                    <input type="text" className="btm_brdr" required onChange={e => setpaperID(e.target.value)} /><br/>
                    <label>Enter PID for paper to be published</label><br/><br/>
                    <button className="small primary_blue" onClick={loadUnpublishedPapers}>Search</button><br/><br/><br/><br/>
                </form>

            </div>

            <div class="modal_container" id="appSuccessModal">  
                <div class="modal_content zi3">
                    <div class="dialogue_pane large12 medium12 small12">  
                        <div style={{padding: "10px"}}>Application Status</div>
                    </div>
                    <div class="page_container">  
                        <span id="success" style={{display: "none"}}>
                                {articles.map(article =>(
                                    <span key={article.id}>
                                        <h6>{article.papertitle}</h6>
                                        <p>1st Author: {article.authname}, {article.authmail}</p>
                                        <p>Paper ID: {article.paperid}, {article.appliedon}</p>
                                        <label>Abstract: {article.abstract}</label><br/><br/>
                                        <button className={article.appstatus}>{article.appstatus}</button>
                                    </span>
                                ))}
                                <br/><br/>
                                <NavLink to="/app/latest">Go Back Home</NavLink>
                                <br/><br/>
                        </span>
                        <span id="fail" style={{display: "none"}}>
                            <br/><br/>
                            <h6>No such Paper ID, please check you mail to get your application number.</h6>
                            <br/><br/>
                            <NavLink to="/app/latest">Go Back Home</NavLink>
                            <br/><br/>
                        </span>
                    </div>
                </div>  
            </div> 
        </Fragment>
    );
}

export default AppStatusView;