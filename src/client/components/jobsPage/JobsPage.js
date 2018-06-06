import React, { Component } from "react";
import { connect } from "react-redux";
import JobsList from "./JobsList";
import SearchBar from "../SearchBar";
import { fetchJobs, updateNotLandedDirectly } from "../../actions/index";

class JobsPage extends Component {
  componentWillMount() {
    const { keywords, locationName } = this.props.match.params;
   
    //this.props.fetchJobs(keywords, locationName);
  }

  render() {
    console.log("keywords",this.props.match.params)
    return (
      <div>
        <SearchBar  />
        <JobsList jobs={this.props.jobs} />
      </div>
    );
  }
}

const mapStateToProps = ({ jobs, searchValues }) => ({
  jobs,
  searchValues
});
export default connect(mapStateToProps, { fetchJobs, updateNotLandedDirectly })(
  JobsPage
);
