import React, {Fragment, useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import NavigationView from "./NavigationComp";
import axios from "axios";
import logo from "./static/logo.png";

const PublishView = () => {

    //--------------------------------File Upload Script----------------------------------------//

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

        console.log("File Added");
        
        axios.post('/app/publish/uploadForReviewDoc', formData, {
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

    //---------------------------------------Form Data Script--------------------------------//
    
    const openApplicationSuccessModal = () =>{
        document.getElementById("appSuccessModal").style.display="block";
    }

    //---------------------------------------Form Data Script--------------------------------//

    const [authorName, setAuthorName] = useState ("");
    const [authorEmail, setAuthorEmail] = useState ("");
    const [paperTitle, setPaperTitle] = useState ("");
    const [paperAbstract, setPaperAbstract] = useState ("");

    const handleSubmit = async () =>{


        const applicationBody = { 
            author: authorName,
            email: authorEmail,
            title: paperTitle,
            abstract: paperAbstract,
            file: file.name
         };

        //check if abstract lenght is more than 250 words
        if(paperAbstract.split(" ").length > 250){
            document.getElementById("absSpawner").style.display="block";
        }

        //check if application body is empty
        if(!authorName || !authorEmail || !paperTitle || !paperAbstract || authorName.length == 0 || authorEmail.length == 0 || paperTitle.length == 0 || paperAbstract.length == 0 || paperAbstract.length >= 9990){
            displayErrorDiv(); 
        }
        else{
            openApplicationSuccessModal();
        }
        displayDiv();

        const applicationResponse = await fetch("/app/publish/submit", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(applicationBody)
        }).then(res => {
            if(res.status==200){
                setAuthorName(" ");
                setAuthorEmail(" ");
                setPaperTitle(" ");
                setPaperAbstract(" ");

                document.getElementById("wait").style.display="none";
                document.getElementById("success").style.display="block";
            }
            else{
                document.getElementById("wait").style.display="none";
                document.getElementById("fail").style.display="block";
            }

        }).catch(err => console.log(err))

    }

    //reload page function
    const reloadPage = () => {
        window.location.reload();
    }

    //make a function to display an div after 1 minute

    const   displayDiv = () => {
        setTimeout(() => {
            document.getElementById("reloadSpawner").style.display="block";
        }, 30000);
    }

    const   displayErrorDiv = () => {
        setTimeout(() => {
            document.getElementById("errorSpawner").style.display="block";
        }, 1000);
    }

    const formPreventDefault = (e) => {
        e.preventDefault();
    }


    //---------------------------------------Form Front End----------------------------------//

    return(
        <Fragment>
            <NavigationView/>
            <div className="page_container">
                <form className="form column large6 medium12 small12" onSubmit={formPreventDefault}>
                    <h6>Publish your Article with us</h6>
                    <br/>
                    <input type="text" className="btm_brdr" required onChange={e => setAuthorName(e.target.value)} /><br/>
                    <label>Name of First Author</label><br/><br/>
                    <input type="email" className="btm_brdr" required onChange={e => setAuthorEmail(e.target.value)} /><br/>
                    <label>Email address of First Author</label><br/><br/>
                    <input type="text" className="btm_brdr" required onChange={e => setPaperTitle(e.target.value)} /><br/>
                    <label>Title of paper</label><br/><br/>
                    <input type="text" className="btm_brdr" required onChange={e => setPaperAbstract(e.target.value)} /><br/>
                    <label>Abstract of paper</label><br/><br/>
                    <div id="absChecker" className="primary_red" style={{display: "none", padding: "4px 10px"}}>Abstract exceeds input limit. length should be between 50 to 250 words.</div>
                    <input type="file" required onChange={handleChange}/><br/>
                    <button className="secondary_blue" onClick={uploadFile}>Upload</button>
                    <div id="docxChecker" className="primary_red" style={{display: "none", padding: "4px 10px"}}>File uploaded is not of type .doc .docx. Upload another file.</div>
                    <div className="progessBar" style={{ width: progress }}>
                       Progress: {progress}
                    </div>
                    <hr />
                    <button className="primary_green" onClick={handleSubmit}>Submit for review</button>
                </form>
                <div className="column large6 medium12 small12">
                    <h6>Notes for Submission</h6>
                    <p>
                        1. Make sure the uploaded document is in format specified(.doc, .docx) in Submission Guidelines section.<br/>
                        2. Rename your document to title of article before uploading.<br/>
                        3. Abstract length in form should be between 50 to 250 words as it is going to be used to display trimmed abstract in article info.<br/>
                        4. Write full abstract as per your article in draft(docx file) which you'll be uploading.<br/>
                    </p>
                </div>
            </div>
            <div class="modal_container" id="appSuccessModal">  
                <div class="modal_content zi3">  
                    <div class="dialogue_pane large12">  
                        <div style={{padding: "10px"}}>Submission Status</div>
                    </div>
                    <div class="page_container">  
                        <span id="wait">
                            <br/><br/><br/><br/>                
                            <img src={logo} className="logoTitle center" alt="logo" /><br/><br/>
                            <div class="indeterminate_progress_bar center"></div><br/><br/>
                            <div id="reloadSpawner" className="ta_center" onClick={reloadPage} style={{display: "none"}}>Form taking too long to Submit? <a>Retry.</a></div>
                        </span>
                        <span id="success" style={{display: "none"}}>
                            <h6>Your application has been submitted successfuly, please check your mail for further details</h6>
                            <NavLink to="/app/latest">Goto Home</NavLink> or, <NavLink to="/app/articleStatus">Check application status</NavLink>
                        </span>
                        <span id="fail" style={{display: "none"}}>
                            <h6>Your application could not be submitted, please try again later</h6>
                            <NavLink to="/app/latest">Goto Home</NavLink>
                        </span>
                    </div>
                </div>  
            </div> 

            <div class="modal_container" id="errorSpawner">  
                <div class="modal_content zi3">  
                    <div class="dialogue_pane large12">  
                        <div style={{padding: "10px"}}>Form Error</div>
                    </div>
                    <div class="page_container">  
                        <br/><br/>
                        <h6 className="ta_center" onClick={reloadPage}>Form was not submitted correctly and couldn't be validated.<span style={{color: "#fc1f1e", cursor: "pointer"}} onClick={reloadPage}> Please Retry</span></h6>
                    </div>
                </div>  
            </div> 


        </Fragment>
    );
}

export default PublishView;
