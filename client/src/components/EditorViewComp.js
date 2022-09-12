import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

const EditorView = () => {

    const [secretKey, setSecretKey] = useState ("");

    const handleSubmit = () =>{

    var url="/app/editorDashboardRestrictedPassword";
    
    let response = fetch(url)

    .then(response => response.text())
    .then(data => {
        var a = data;
        if(secretKey===a){
            document.getElementById("passLink").style.display=("block");
            document.getElementById("passHide").style.display=("none");
        }
        else{
            alert("Secret Key is Wrong");
        }
    });

    console.log(response.length + 135);

    }

    const formPreventDefault = (e) => {
        e.preventDefault();
    }

    return(
        <Fragment>
            <div className="dashboardLoginContainer dlevel3">
                <form onSubmit={formPreventDefault}>
                    <h5>Log into IJLE Dashboard</h5><br/><br/><br/>
                    <NavLink to="/app/dsfger435efbhaGFHGFXG909dfhghcc$22EditorDashboard" id="passLink" style={{display: "none"}}><button>Open Dashboard</button></NavLink>
                    <div id="passHide">
                        <input type="password" className="btm_brdr" required onChange={e => setSecretKey(e.target.value)} /><br/>
                        <label>Enter your secret key here to login</label><br/><br/>
                        <button className="small primary_blue" onClick={handleSubmit}>Login</button><br/><br/><br/><br/>
                        <div className="tooltip_container">  
                            <span className="tooltip_info">
                                This is restricted area due to which signup option is not provided. We invite authors like you to become editors for our organization. If you want to join our team of editors but don't have an invite, you can drop us a mail with info on paper(s) you have published.
                            </span>  
                            <button className="small primary_white dlevel2">Why can't I sign up</button>  
                        </div>
                    </div>
                </form>
            </div>

        </Fragment>
    );
}

export default EditorView;