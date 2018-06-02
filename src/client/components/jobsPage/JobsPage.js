import React, { Component } from "react";
import { connect } from "react-redux";
import JobsList from "./JobsList";
import SearchBar from "../SearchBar";
import { fetchJobs, updateNotLandedDirectly } from "../../actions/index";

class JobsPage extends Component {
  componentDidMount() {
    this.props.landedDirectly
      ? this.props.updateNotLandedDirectly(false)
      : this.props.fetchJobs({});
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

const mapStateToProps = ({ jobs, landedDirectly }) => ({
  jobs,
  landedDirectly
});
export default connect(mapStateToProps, { fetchJobs, updateNotLandedDirectly })(
  JobsPage
);
