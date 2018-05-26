import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchTerm: "",
    searchLocation: ""
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = (searchTerm, searchLocation) => {};
  render() {
    return (
      <form>
        <label htmlFor="search-term">What</label>
        <input
          onChange={this.onInputChange}
          type="text"
          id="search-term"
          name="searchTerm"
          placeholder="e.g marketing manager"
        />

        <label htmlFor="location">Where</label>
        <input
          onChange={this.onInputChange}
          type="text"
          id="location"
          name="searchLocation"
          placeholder="town or city"
        />
        <button>Search Jobs</button>
      </form>
    );
  }
}
