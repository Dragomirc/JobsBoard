import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./homePage/HomePage";
import JobsPage from "./jobsPage/JobsPage";
import { fetchJobs } from "../actions/index";

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
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchJobs })(App);
