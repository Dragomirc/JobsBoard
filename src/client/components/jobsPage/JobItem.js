import React from "react";
import { Link } from "react-router-dom";

const JobItem = ({
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
    <Link to={`/jobDetails/${id}`}>
      <li>
        <h2>{title}</h2>
        <div>
          Posted {date} by {employerName}
        </div>
        <div>{salary}</div>
        <div>{location}</div>
        <div>{type}</div>
        <p>{description}</p>
      </li>
    </Link>
  );
};

export default JobItem;
