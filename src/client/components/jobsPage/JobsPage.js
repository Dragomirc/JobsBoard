import React from "react";
import JobsList from "./JobsList";
import SearchBar from "../SearchBar";

const JobsPage = props => (
  <div>
    <SearchBar />
    <JobsList />
  </div>
);

export default JobsPage;
