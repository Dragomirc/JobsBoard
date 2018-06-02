import React from "react";
import _ from "lodash";
import JobItem from "./JobItem";

const JobsList = props => {
  const renderJobs = _.map(props.jobs, job => (
    <JobItem key={job.jobId} jobDetails={job} />
  ));

  if (!Object.keys(props.jobs).length) {
    return <div>Loading...</div>;
  }
  return <ul className="list-group">{renderJobs}</ul>;
};

export default JobsList;
