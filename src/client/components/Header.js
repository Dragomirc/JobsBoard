import React from "react";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#" title="Home Page">
            <img src="" alt="Reed logo" />
          </a>
        </li>
        <li>
          <a href="/jobs" title="Jobs">
            Jobs
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Register CV</a>
        </li>
        <li>
          <a href="#">Sign in</a>
        </li>
        <li>
          <a href="#">Shortlisted jobs</a>
        </li>
        <li>
          <a href="#">Recruiting</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
