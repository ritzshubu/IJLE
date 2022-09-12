import React, { Fragment} from "react";
import { NavLink } from "react-router-dom";
import ChatBotView from "./ChatBotComp";
import logo from "./static/logo.png";

const NavigationView = () => {
    const openSideNav = () =>{
        document.getElementById(`side1`).classList.remove('hide');
    }
    const closeSideNav = () =>{
        document.getElementById(`side1`).classList.add('hide');
    }

    return(
        <Fragment>
            <div className="page_container">
                <span className="largeNavIcon" onClick={openSideNav}><i className="ms-Icon ms-Icon--GlobalNavButton"></i></span>
                <NavLink to="/app/home"><img src={logo} className="logoTitle" alt="logo" /></NavLink>
                <a className="pivot_title small0" style={{color: "#1e1e1e", fontSize: "28px", fontFamily: "times new roman", fontWeight: "bold"}}>International Journal of Legal Expatiate</a>
                <ChatBotView/>
            </div>
            <div className="page_container">
                <hr/>
                <NavLink to="/app/latest">Newest First</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/app/popular">Most Popular</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/app/search">Search</NavLink>
            </div>
            <div className="sidepanel_container hide" id="side1">
                <div className="sidepanel_content dlevel3" style={{overflowY: "auto"}}>
                    <button className="primary_red right mod_close_btn" onClick={closeSideNav}>X</button>
                    <div className="page_container">
                        <br/>
                        <h5>Menu</h5>
                        <NavLink to="/app/home"><div className="large12 panel_item" onClick={closeSideNav}>Home</div></NavLink>
                        <NavLink to="/app/publish"><div className="large12 panel_item" onClick={closeSideNav}>Publish an article</div></NavLink>
                        <NavLink to="/app/guidelines"><div className="large12 panel_item" onClick={closeSideNav}>Submission Guidelines</div></NavLink>
                        <NavLink to="/app/contriNature"><div className="large12 panel_item" onClick={closeSideNav}>Nature of Contributions</div></NavLink>
                        <NavLink to="/app/reviewProcess"><div className="large12 panel_item" onClick={closeSideNav}>Review Process</div></NavLink>
                        <NavLink to="/app/standards"><div className="large12 panel_item" onClick={closeSideNav}>Editing Standards</div></NavLink>
                        <hr/>
                        <NavLink to="/app/archives"><div className="large12 panel_item" onClick={closeSideNav}>Journal Acrhives</div></NavLink>
                        <NavLink to="/app/team"><div className="large12 panel_item" onClick={closeSideNav}>Editorial Board</div></NavLink>
                        <NavLink to="/app/articleStatus"><div className="large12 panel_item" onClick={closeSideNav}>Article status</div></NavLink>
                        <hr/>
                        <NavLink to="/app/editorDashboardRestricted"><div className="large12 panel_item" onClick={closeSideNav}>Editor Login</div></NavLink>
                        <br/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NavigationView;

/*
    Done for now. To be added:
    1. New component for Navigation and Account options - Done
    2. Whatsapp chat link for Chat with us button - Done


    <div className="large12 panel_item">Journal Archives</div>
    <div className="large12 panel_item">ISSN</div>
*/