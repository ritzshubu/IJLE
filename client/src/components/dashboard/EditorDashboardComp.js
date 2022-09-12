import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const EditorDashboardView = () => {


    return(
        <Fragment>
            <div className="dashboardContainer dlevel3">
                <h4>Editor Dashboard</h4><br/><br/>
                <NavLink to="/app/dsfge35efbasd334aaGXG909dfhgcc$22PublishDashboard">Publish an Article</NavLink>
                <NavLink to="/app/dger4356sdy5ssdy66aajju8yg9dfcc$22StatusDashboard">Unpublished Articles</NavLink>
                <NavLink to="/app/dsfger435efbhaGFHGFXG909dfhghcc$22ManageDashboard">Published Article</NavLink>
                <br/>
                <label>*Close this tab to log out</label>
            </div>
        </Fragment>
    );
}

export default EditorDashboardView;