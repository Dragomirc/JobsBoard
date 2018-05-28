import React, { Component } from "react";
import { connect } from "react-redux";
import JobItem from "../jobsPage/JobItem";

class JobDetailsPage extends Component {
  render() {
    console.log("Hello Draogmir", this.props.match.params.id);
    const { id } = this.props.match.params;
    const { jobs } = this.props;
    const job = jobs[id];

    if (!job) {
      return <div>Loading...</div>;
    }
    const {
      title,
      date,
      employerName,
      salary,
      location,
      type,
      description
    } = job;
    return (
      <div>
        <h2>{title}</h2>
        <div>
          Posted {date} by {employerName}
        </div>
        <div>{salary}</div>
        <div>{location}</div>
        <div>{type}</div>
        <p>{description}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });

export default connect(mapStateToProps)(JobDetailsPage);
