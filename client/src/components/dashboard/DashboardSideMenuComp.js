import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const DashboardSideMenuView = () => {


    return(
        <Fragment>
            <div className="dashMenu pivot_menu primary_blue large12 medium12 small12 dlevel2">
                <NavLink class="pivot_title" to="/app/dsfger435efbhaGFHGFXG909dfhghcc$22EditorDashboard">IJLE Dashboard</NavLink>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink className="pivot_button small0" to="/app/dsfge35efbasd334aaGXG909dfhgcc$22PublishDashboard">Publish an Article</NavLink>
                <NavLink className="pivot_button small0" to="/app/dger4356sdy5ssdy66aajju8yg9dfcc$22StatusDashboard">Manage Unpublished Article(s)</NavLink>
                <NavLink className="pivot_button small0" to="/app/dsfger435efbhaGFHGFXG909dfhghcc$22ManageDashboard">Manage Published Article(s)</NavLink>
            </div>

        </Fragment>
    );
}

export default DashboardSideMenuView;