import React, { Fragment } from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "fdweb/fluent-icons.css";
import "fdweb/fluent.css";
import "./App.css";
import LatestView from './components/LatestArtsComp';
import PopularView from './components/PopularArtsComp';
import SearchView from './components/SearchArtsComp';
import PublishView from './components/ArticlePublishComp';
import EditorView from './components/EditorViewComp';
import EditorDashboardView from './components/dashboard/EditorDashboardComp';
import StatusDashboardView from './components/dashboard/StatusDashboardComp';
import ManageDashboardView from './components/dashboard/ManageDashboardComp';
import PublishDashboardView from './components/dashboard/PublishDashboardComp';
import AppStatusView from './components/AppStatusComp';
import AboutView from './components/info/AboutComp';
import TeamView from './components/info/TeamComp';
import StandardsView from './components/info/StandardsComp';
import GuidelinesView from './components/info/GuidelinesComp';
import HomeView from './components/info/HomeComp';
import FooterView from './components/FooterComp';
import ReviewProcessView from './components/info/ReviewProcessComp';
import ContriNatureView from './components/info/ContriNatureComp';
import ChangePasswordView from './components/dashboard/ChangePasswordComp';
import IISNAnnual from './components/ISSNAnnualComp';

const App = () =>{

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/app/home" />
          </Route>
          <Route path="/app/home" component={HomeView} />
          <Route path="/app/archives" component={IISNAnnual} />
          <Route path="/app/latest" component={LatestView} />
          <Route path="/app/popular" component={PopularView} />
          <Route path="/app/search" component={SearchView} />
          <Route path="/app/publish" component={PublishView} />
          <Route path="/app/articleStatus" component={AppStatusView} />
          <Route path="/app/editorDashboardRestricted" component={EditorView} />
          <Route path="/app/about" component={AboutView} />
          <Route path="/app/team" component={TeamView} />
          <Route path="/app/standards" component={StandardsView} />
          <Route path="/app/guidelines" component={GuidelinesView} />
          <Route path="/app/reviewProcess" component={ReviewProcessView} />
          <Route path="/app/contriNature" component={ContriNatureView} />
          <Route path="/app/changeEditorPassword" component={ChangePasswordView} />
          <Route path="/app/dsfger435efbhaGFHGFXG909dfhghcc$22EditorDashboard" component={EditorDashboardView} />
          <Route path="/app/dger4356sdy5ssdy66aajju8yg9dfcc$22StatusDashboard" component={StatusDashboardView} />
          <Route path="/app/dsfger435efbhaGFHGFXG909dfhghcc$22ManageDashboard" component={ManageDashboardView} />
          <Route path="/app/dsfge35efbasd334aaGXG909dfhgcc$22PublishDashboard" component={PublishDashboardView} />
        </Switch>
        <FooterView/>
      </Router>
    </Fragment>
  );  
}

export default App;