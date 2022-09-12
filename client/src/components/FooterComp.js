import React, { Fragment, useState} from "react";
import igLogo from "./static/instagram.png";
import liLogo from "./static/linkedin.png";
import logo from "./static/logo.png";
import ad from "./static/ad.png";
import mailogo from "./static/mailogo.png";
import atlogo from "./static/atlogo.png";

const FooterView = () => {
    const openTnC = () => {
        document.getElementById("tnc").style.display="block";
    }
    const closeTnC = () => {
        document.getElementById("tnc").style.display="none";
    }

    const openLic = () => {
        document.getElementById("licenses").style.display="block";
    }
    const closeLic = () => {
        document.getElementById("licenses").style.display="none";
    }

    const openPG = () => {
        document.getElementById("plagGuide").style.display="block";
    }
    const closePG = () => {
        document.getElementById("plagGuide").style.display="none";
    }

    const openSub = () => {
        document.getElementById("subscribe").style.display="block";
    }
    const closeSub = () => {
        document.getElementById("subscribe").style.display="none";
    }

    const openAdd = () => {
        document.getElementById("addresses").style.display="block";
    }
    const closeAdd = () => {
        document.getElementById("addresses").style.display="none";
    }


    const [Name, setName] = useState ("");
    const [Email, setEmail] = useState ("");
    const [Number, setPhone] = useState ("");

    const formPreventDefault = (e) => {
        e.preventDefault();
    }
    const handleSubmit = async () =>{

        const applicationBody = { 
            name: Name,
            email: Email,
            phone: Number
         };

         document.getElementById("form").style.display="none";
         document.getElementById("wait").style.display="block";

        const applicationResponse = await fetch("/app/subscribe", {
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

    return(
        <Fragment>
            <footer>
                <div className="column large12 medium12 small12 primary_inverted" style={{ width: "100%", padding: "0px 10px", scale: "0.9" }}>
                    <div className="column large3 medium3 small12" style={{paddingLeft: "6vh"}}><br />
                        <p>Important Links</p>
                        <a onClick={openTnC} style={{color: "#ececff"}}>Terms and Conditions</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={openLic} style={{color: "#ececff"}}>Licences</a><br/>
                        <a onClick={openPG} style={{color: "#ececff"}}>Plagiarism Guidelines</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={ad} target="_blank" rel="noreferrer" style={{color: "#ececff"}}>Careers</a><br />
                        <a onClick={openAdd} style={{color: "#ececff"}}>Contacts</a><br/><br/>
                    </div>
                    <div className="column large3 medium3 small12" style={{paddingLeft: "6vh"}}><br />
                        <p>Get In Touch</p>
                        <a href="https://www.instagram.com/ijle2021/" target="_blank" rel="noreferrer"><img src={igLogo} className="icon left defdark" alt="instagram" /></a>
                        <a href="https://www.linkedin.com/in/international-journal-of-legal-expatiate-4a0282214" target="_blank" rel="noreferrer"><img src={liLogo} className="icon left leftpadicon defdark" alt="youtube"  style={{marginLeft: "30px"}}/></a>
                    </div>
                    <div className="column large3 medium3 small12" style={{paddingLeft: "6vh"}}><br />
                        <p>Subscribe</p>
                        <button className="small primary_white" onClick={openSub}>Subscribe to this Journal</button>
                    </div>
                    <div className="column large3 medium3 small12" style={{paddingLeft: "6vh"}}><br />
                        <p>Mail Us</p>
                        <a href="mailto:publisher@ijle.org" target="_blank" rel="noreferrer"><img src={atlogo} className="icon left defdark" alt="instagram" /></a>
                        <a href="mailto:editor@ijle.org" target="_blank" rel="noreferrer"><img src={mailogo} className="icon left leftpadicon defdark" alt="youtube"  style={{marginLeft: "30px"}}/></a>
                    </div>
                    <div className="column large12 medium12 small12" style={{paddingLeft: "6vh"}}>
                        <hr/><br/>
                        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style={{borderWidth: "0", width: "90px"}} src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
                        <br/><br/>
                    </div>
                    </div>
            </footer>

            <div class="modal_container" id="tnc">  
                <div class="modal_content zi3" style={{width: "50%", height: "600px"}}>
                    <div class="dialogue_pane large12">  
                        <button onClick={closeTnC} className="right primary_red mod_close_btn">x</button>
                        <div style={{padding: "10px"}}>Terms and Conditions</div>
                    </div>
                    <div class="page_container">  
                        <br/><br/>
                        
                        <p>
                            1.	The manuscripts should be well research/documented following uniform citation method for footnotes.
                            <br/>
                            2.	The manuscripts should be the original work of the contributor and not a compilation of pre-existing works on the subject. It should not amount to violation of others copyright. The contributor must give a declaration as to originality of the work.
                            <br/>
                            3.	The copyright in all papers published shall vest in the owner of IJLE.
                            <br/>
                            4.	The views adopted from other sources and others’ work must be quoted and sufficiently acknowledged.
                            <br/>
                            5.	Paraphrasing another authors’ work shall not be considered as original work. The source must be acknowledged.
                            <br/>
                            6.	The contributor must cover the risk of being sued for copyright, defamation or contempt and shall be liable to suffer the losses if caused by violating copyright.
                            <br/>
                        </p>

                        <br/><br/>
                    </div>
                </div>  
            </div> 

            <div class="modal_container" id="licenses">  
                <div class="modal_content zi3" style={{width: "50%", height: "600px"}}>
                    <div class="dialogue_pane large12">  
                        <button onClick={closeLic} className="right primary_red mod_close_btn">x</button>
                        <div style={{padding: "10px"}}>Licences</div>
                    </div>
                    <div class="page_container">  
                        <br/><br/>
                        
                        <p>
                        Creative Common Licenses  <br/><hr/><br/>
                        <br/>Open access articles in Springer Nature journals are published under Creative Commons licences. These provide an industry-standard framework to support easy re-use of open access material. Under Creative Commons licences, authors retain copyright of their articles.
                        <br/><br/>IJLE articles are published open access under a CC BY licence (Creative Commons Attribution 4.0 International licence). The CC BY licence is the most open licence available and considered the industry 'gold standard' for open access; it is also preferred by many funders. This licence allows readers to copy and redistribute the material in any medium or format, and to alter, transform, or build upon the material, including for commercial use, providing the original author is credited.
                        <br/><br/><strong>Publisher is not responsible for any errors in reproduction if artwork is not provided according to the above specifications.</strong><br/><br/>
                        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style={{borderWidth: "0", width: "90px"}} src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
                        </p>

                        <br/><br/>
                    </div>
                </div>  
            </div> 

            <div class="modal_container" id="plagGuide">  
                <div class="modal_content zi3" style={{width: "50%", height: "600px"}}>
                    <div class="dialogue_pane large12">  
                        <button onClick={closePG} className="right primary_red mod_close_btn">x</button>
                        <div style={{padding: "10px"}}>Plagiarism Guidelines</div>
                    </div>
                    <div class="page_container">  
                        <br/><br/>
                        
                        <p>
                           This Journal follows UGC guidelines. As per the IJLE Journal Policy on Academic Misconduct, “plagiarism” means failure to acknowledge ideas or phrases from another source. Such source is not limited to published text. Acknowledgement of others’ work is expected even if the source was a discussion (whether oral or written) with another person or use of materials on the internet.
                        </p>

                        <br/><br/>
                    </div>
                </div>  
            </div> 

            <div class="modal_container" id="addresses">  
                <div class="modal_content zi3" style={{width: "50%", height: "600px"}}>
                    <div class="dialogue_pane large12">  
                        <button onClick={closeAdd} className="right primary_red mod_close_btn">x</button>
                        <div style={{padding: "10px"}}>Contacts</div>
                    </div>
                    <div class="page_container">  
                        <br/><br/>
                        
                        <p>
                            <b>Publisher</b><br/>
                            International Journal of Legal Expatiate<br/>
                            15/193 Indira Nagar, Lucknow, Uttar Pradesh, India - 226016<br/>
                            Website : <a href="http://www.ijle.org" target="_blank">www.ijle.org</a><br/>
                            E-mail : <a href="mailto:publisher@ijle.org" target="_blank">publisher@ijle.org</a><br/><br/>

                            <b>Editor-in-chief</b><br/>
                            Abhishek Thommandru <br/>
                            H-1, MEGHADRIPETA DEFENCE COLONY, IRSD AREA, VISAKHAPATNAM, AP,  INDIA -530008<br/>
                            E-mail : <a href="mailto:editor@ijle.org" target="_blank">editor@ijle.org</a><br/><br/>
                        </p>

                        <br/><br/>
                    </div>
                </div>  
            </div> 

            <div class="modal_container" id="subscribe">  
                <div class="modal_content zi3" style={{width: "50%", height: "600px"}}>
                    <div class="dialogue_pane large12">  
                        <button onClick={closeSub} className="right primary_red mod_close_btn">x</button>
                        <div style={{padding: "10px"}}>Subscribe</div>
                    </div>
                    <div class="page_container">  
                        <br/><br/>
                        <h6>Just fill the form and you're in</h6>
                        <form onSubmit={formPreventDefault} id="form">
                            <br/>
                            <input type="text" className="btm_brdr" required onChange={e => setName(e.target.value)} /><br/>
                            <label>Your Name</label><br/><br/>
                            <input type="email" className="btm_brdr" required onChange={e => setEmail(e.target.value)} /><br/>
                            <label>Your Email</label><br/><br/>
                            <input type="tel" className="btm_brdr" required onChange={e => setPhone(e.target.value)} /><br/>
                            <label>Your Phone Number</label><br/><br/>
                            <button className="primary_green" onClick={handleSubmit}>Confirm</button>
                        </form>
                        <div id="wait" style={{display: "none"}}>
                            <br/><br/><br/><br/>                
                            <img src={logo} className="logoTitle center" alt="logo" /><br/><br/>
                            <div class="indeterminate_progress_bar center"></div>
                        </div>
                        <div id="success" style={{display: "none"}}>

                        <br/><br/><br/><br/>                
                        <img src={logo} className="logoTitle center" alt="logo" /><br/><br/>
                        <h3 className="ta_center"><i className="ms-Icon ms-Icon--SkypeCircleCheck" style={{color: "green", position: "relative", top: "5px"}}></i>&nbsp;&nbsp;You're Subscribed, Yay!!</h3>

                        </div>
                        <div id="fail" style={{display: "none"}}>

                        <br/><br/><br/><br/>                
                        <img src={logo} className="logoTitle center" alt="logo" /><br/><br/>
                        <h3 className="ta_center"><i className="ms-Icon ms-Icon--SkypeCircleMinus" style={{color: "red", position: "relative", top: "5px"}}></i>&nbsp;&nbsp;New Subscription Failed, Oops !!</h3>

                        </div>
                        <br/><br/>
                    </div>
                </div>  
            </div> 

        </Fragment>
    );
}

export default FooterView;

/*
    Done for now. To be added:
    1. New component for Navigation and Account options - Done
    2. Whatsapp chat link for Chat with us button - Done


    <div className="large12 panel_item">Journal Archives</div>
    <div className="large12 panel_item">ISSN</div>
                            <br />
                        <br />
                        <br />
                        <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.89373821591!2d77.6346617!3d13.1166989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdee225fe28f600f6!2sREVA+University!5e0!3m2!1sen!2sin!4v1522677320198"
                        style={{
                            border: "none",
                            borderRadius: "10px",
                            height: "276px",
                            width: "100%",
                        }}
                        allowFullScreen="yes"
                        ></iframe>
                        <br />
                        <br />
                        <br />

*/
