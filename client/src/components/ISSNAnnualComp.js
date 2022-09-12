import React, { Fragment, useState, useEffect } from "react";
import NavigationView from "./NavigationComp";
import ArticleView from "./ArticleViewComp";
import PaperTitle from "./PaperTitleComp";
import { NavLink } from "react-router-dom";
const IISNAnnual = () => {

    return(
        <Fragment>
            <NavigationView/>
            <div className="page_container">
                <ul>
                    <NavLink to="/app/latest">
                        <li className="volumeContainer">
                            <h5>IJLE-Vol1-2021</h5>
                        </li>
                    </NavLink>
                </ul>
                <br/><br/><br/><br/>
            </div>

        </Fragment>
    );
}

export default IISNAnnual;