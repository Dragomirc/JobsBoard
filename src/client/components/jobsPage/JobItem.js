import React from "react";

const JobItem = ({
  title,
  date,
  employerName,
  salary,
  location,
  type,
  description
}) => {
  return (
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
  );
};

export default JobItem;
