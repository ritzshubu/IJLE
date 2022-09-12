import React, { Fragment, useState, useEffect, useRef } from "react";
import DashboardSideMenuView from "./DashboardSideMenuComp";
import axios from "axios";
import {NavLink} from "react-router-dom";

const PublishDashboardView = () => {

    const [paperID, setpaperID] = useState ("");

    const [author, setAuthor] = useState ("");
    const [email, setEmail] = useState ("");
    const [title, setTitle] = useState ("");
    const [abstract, setAbstract] = useState ("");
    const [issue, setIssue] = useState ("");
    const [volume, setVolume] = useState ("");

    const [article, setArticle] = useState ([]);

    const loadUnpublishedPapers = async () =>{
        try {
            const response = await fetch(`/app/publishArticle/articles/${paperID}`);
            const jsonData = await response.json();

            setArticle(jsonData);

            setAuthor(jsonData[0].authname);
            setEmail(jsonData[0].authmail);
            setTitle(jsonData[0].papertitle);
            setAbstract(jsonData[0].abstract);

            document.getElementById("searchFormFinal").style.display=("none");
            document.getElementById("publishFormFinal").style.display=("block");


        } catch (error) {
            console.error(error);
        }

    }

    //=================================================================================================//

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
//        console.log(file);
        setFile(file); // storing file
        console.log("Storing File");
    }

    const uploadFile = () => {
        console.log("Trying to upload file");

        const formData = new FormData();
        formData.append('file', file); // appending file

        console.log("File Appended");
        axios.post('/app/finalPublish/uploadFinalDoc', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
                console.log("File Uploaded");
            }
        }).then(res => {
//            console.log(res);
            console.log("File Fetched");
            getFile({ name: res.data.name,
                     path: res.data.path
                   })
        }).catch(err => console.log(err))

    }


    const handleSubmit = async () =>{
        const applicationBody = { 
            author: author,
            email: email,
            title: title,
            abstract: abstract,
            file: file.name,
            pid: paperID,
            issue: issue,
            volume: volume
         };

         console.log(applicationBody);

        openApplicationSuccessModal();

        const applicationResponse = await fetch("/app/finalPublish/submit", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(applicationBody)
        }).then(res => {
            if(res.status==200){

                document.getElementById("wait").style.display="none";
                document.getElementById("success").style.display="block";
            }
            else{
                document.getElementById("wait").style.display="none";
                document.getElementById("fail").style.display="block";
            }

        }).catch(err => console.log(err))
    }

    const openApplicationSuccessModal = () =>{
        document.getElementById("appSuccessModal").style.display="block";
    }

    useEffect(() => {
        console.log("Hello World");
    }, []);

    const formPreventDefault = (e) => {
        e.preventDefault();
    }

    return(
        <Fragment>
                <DashboardSideMenuView/>
                
                    <div className="dashContent">
                        <form onSubmit={formPreventDefault} className="pidSearch" id="searchFormFinal">
                            <h3>Publish an Article</h3><br/><br/>
                            <input type="text" className="btm_brdr" required onChange={e => setpaperID(e.target.value)} /><br/>
                            <label>Enter PID for paper to be published</label><br/><br/>
                            <button className="small primary_blue" onClick={loadUnpublishedPapers}>Search</button><br/><br/><br/><br/>
                        </form>

                        <form onSubmit={formPreventDefault} className="pidSearch form column large6 medium12 small12" id="publishFormFinal" style={{display: "none"}}>
                            <h3>Publish This Article</h3><br/><br/>
                            {article.map(article =>(
                                    <span key={article.id}>
                                        <label>Paper ID: {article.paperid}</label><br/><br/>
                                        <label>Author Name: {article.authname}</label><br/><br/>
                                        <label>Paper Title: {article.papertitle}</label><br/><br/>
                                        <label>Applied On: {article.appliedon}</label><br/><br/>
                                        <label>Application Status: {article.appstatus}</label><br/><br/>
                                        <label>Paper Abstract: {article.abstract}</label><br/><br/>
                                    </span>
                            ))}
                            <input type="text" className="btm_brdr" required onChange={e => setIssue(e.target.value)} /><br/>
                            <label>Issue Number</label><br/><br/>
                            <input type="text" className="btm_brdr" required onChange={e => setVolume(e.target.value)} /><br/>
                            <label>Volume</label><br/><br/>
                            <input type="file" required onChange={handleChange}/><br/>
                            <label>Add final draft and click on upload(.pdf format only)</label><br/>
                            <button className="secondary_blue" onClick={uploadFile}>Upload</button>
                            <div className="progessBar" style={{ width: progress }}>
                            {progress}
                            </div>
                            <hr />
                            <button className="primary_green" onClick={handleSubmit}>Publish Now</button>
                        </form>
                    </div>
                    

                    <div class="modal_container" id="appSuccessModal">  
                        <div class="modal_content zi3">  
                            <div class="dialogue_pane large12">  
                                <div style={{padding: "10px"}}>Submission Successful</div>
                            </div>
                            <div class="page_container">  
                                <span id="wait">                            
                                    <br/><br/><br/><br/>
                                    <div class="indeterminate_progress_bar center"></div>
                                </span>
                                <span id="success" style={{display: "none"}}>
                                    <h6>This paper has been published successfully, an aknowledgement mail has been sent to the Author</h6>
                                    <NavLink to="/app/latest">Goto Home</NavLink> or, <NavLink to="/app/status">Check application status</NavLink>
                                </span>
                                <span id="fail" style={{display: "none"}}>
                                    <h6>This paper could not be submitted, please try again later</h6>
                                    <NavLink to="/app/latest">Goto Home</NavLink>
                                </span>
                            </div>
                        </div>  
                    </div> 
        </Fragment>
    );
}

export default PublishDashboardView;