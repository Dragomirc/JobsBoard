import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import JobItem from "./JobItem";

class JobsList extends Component {
  renderJobs = () =>
    _.map(this.props.jobs, job => {
      return <JobItem key={job.jobId} jobDetails={job} />;
    });

  render() {
    if (!Object.keys(this.props.jobs).length) {
      return <div>Loading...</div>;
    }
    return <ul className="list-group">{this.renderJobs()}</ul>;
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });

export default connect(mapStateToProps)(JobsList);
