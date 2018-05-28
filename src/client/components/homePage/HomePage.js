import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import SearchBar from "../SearchBar";
import { fetchJobs } from "../../actions/index";

class HomePage extends Component {
  render() {
    return <SearchBar />;
  }
}

export default connect(null, { fetchJobs })(HomePage);
