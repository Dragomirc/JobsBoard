import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./homePage/HomePage";
import JobsPage from "./jobsPage/JobsPage";
import JobDetailsPage from "./jobDetailsPage/JobDetailsPage";
import { fetchJobs } from "../actions/index";

import "../../../public/appStyles.scss";

class App extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jobs" component={JobsPage} />
          <Route exact path="/jobDetails/:id" component={JobDetailsPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchJobs })(App);
