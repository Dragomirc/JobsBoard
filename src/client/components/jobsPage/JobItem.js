import React from "react";
import { Link } from "react-router-dom";

const JobItem = ({
  id,
  title,
  employerName,
  salary,
  location,
  type,
  description
}) => {
  return (
    <Link to={`/jobDetails/${id}`}>
      <li className="list-group-item">
        <h2>{title}</h2>
        <div>Posted by {employerName}</div>
        <div>Salary: {salary}</div>
        <div>Location: {location}</div>
        <div>Job Type: {type}</div>
        <p>Description: {description}</p>
      </li>
    </Link>
  );
};

export default JobItem;
