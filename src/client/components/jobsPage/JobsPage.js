import React, { Component } from "react";
import { connect } from "react-redux";
import JobsList from "./JobsList";
import SearchBar from "../SearchBar";
import { fetchJobs, updateNotLandedDirectly } from "../../actions/index";

class JobsPage extends Component {
  componentDidMount() {
    const { keywords, locationName } = this.props.searchValues;
    this.props.fetchJobs(keywords, locationName);
  }

  render() {
    return (
      <div>
        <SearchBar redirect={false} />
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
