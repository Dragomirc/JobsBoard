import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import JobItem from "./JobItem";

class JobsList extends Component {
  renderJobs = array =>
    _.map(
      array,
      ({
        id,
        title,
        date,
        employerName,
        salary,
        location,
        type,
        description
      }) => {
        return (
          <JobItem
            key={id}
            id={id}
            title={title}
            salary={salary}
            location={location}
            type={type}
            description={description}
          />
        );
      }
    );
  render() {
    if (!Object.keys(this.props.jobs).length) {
      return <div>Loading...</div>;
    }
    return <ul>{this.renderJobs(this.props.jobs)}</ul>;
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });

export default connect(mapStateToProps)(JobsList);
