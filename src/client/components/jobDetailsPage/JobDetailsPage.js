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
    const { title, employerName, salary, location, type, description } = job;
    return (
      <div className="container">
        <h2>Title: {title}</h2>
        <div>Posted by {employerName}</div>
        <div>Salary: {salary}</div>
        <div>Location: {location}</div>
        <div>Job type: {type}</div>
        <p>Description: {description}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });

export default connect(mapStateToProps)(JobDetailsPage);
