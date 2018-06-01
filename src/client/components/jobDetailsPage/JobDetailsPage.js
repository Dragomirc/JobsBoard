import React, { Component } from "react";
import { connect } from "react-redux";
import JobItem from "../jobsPage/JobItem";

class JobDetailsPage extends Component {
  render() {
    const { id } = this.props.match.params;
    const { jobs } = this.props;
    const job = jobs[id];

    if (!job) {
      return <div>Loading...</div>;
    }
    const {
      jobId,
      jobTitle,
      employerName,
      maximumSalary,
      minimumSalary,
      currency,
      jobUrl,
      locationName,
      jobDescription
    } = job;
    return (
      <div className="container">
        <h2>Title: {jobTitle}</h2>
        <div>Posted by {employerName}</div>
        <div>
          Salary: {minimumSalary} - {maximumSalary} {currency}
        </div>
        <div>Location: {locationName}</div>

        <p>Description: {jobDescription}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });

export default connect(mapStateToProps)(JobDetailsPage);
