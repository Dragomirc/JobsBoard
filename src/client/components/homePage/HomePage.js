import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import SearchBar from "../SearchBar";
import { updateNotLandedDirectly } from "../../actions/index";

class HomePage extends Component {
  componentDidMount() {
    this.props.updateNotLandedDirectly(true);
  }
  render() {
    console.log("this.props", this.props.fetchJobs);
    return <SearchBar redirect={true} />;
  }
}

export default connect(null, { updateNotLandedDirectly })(HomePage);
