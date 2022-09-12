import React, { Fragment, useState } from "react";

const ChangePasswordView = () => {

    const [secretKey, setSecretKey] = useState ("");
    const [newKey, setNewKey] = useState ("");

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

    const handleSetSubmit = async () =>{

        const applicationBody = { 
            password: newKey
         };

        alert("Secret Key Changed Successfully");

        const applicationResponse = await fetch("/app/changeDashboardPassword", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(applicationBody)
        }).then(res=>{
            if(res.status===200){
                console.log("Secret Key Changed Successfully");
            }
        });

    }

    const formPreventDefault = (e) => {
        e.preventDefault();
    }

    return(
        <Fragment>
            <div className="dashboardLoginContainer dlevel3">
                    <h5>Change Secret Key</h5><br/><br/><br/>
                    <div id="passHide">
                        <form onSubmit={formPreventDefault}>
                            <input type="text" className="btm_brdr" required onChange={e => setSecretKey(e.target.value)} /><br/>
                            <label>Enter your current secret key</label><br/><br/>
                            <button className="small primary_blue" onClick={handleSubmit}>Login</button><br/><br/><br/><br/>
                        </form>
                    </div>
                    <div id="passLink" style={{display: "none"}}>
                        <form onSubmit={formPreventDefault}>
                            <input type="text" className="btm_brdr" required onChange={e => setNewKey(e.target.value)} /><br/>
                            <label>Enter New Password</label><br/><br/>
                            <button className="small primary_blue" onClick={handleSetSubmit}>Set Password</button><br/><br/><br/><br/>
                        </form>
                    </div>
            </div>

        </Fragment>
    );
}

export default ChangePasswordView;