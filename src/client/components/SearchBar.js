import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { storeSearchValues } from "../actions/index";

class SearchBar extends Component {
  state = {
    searchTerm: "",
    searchLocation: ""
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.storeSearchValues(
      this.state.searchTerm,
      this.state.searchLocation,
      () => {
        this.props.history.push("/jobs");
      }
    );
    this.setState({ searchTerm: "", searchLocation: "" });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="search-term">What</label>
        <input
          onChange={this.onInputChange}
          type="text"
          id="search-term"
          name="searchTerm"
          placeholder={
            this.props.searchValues.searchTerm
              ? this.props.searchValues.searchTerm
              : "e.g marketing manager"
          }
        />

        <label htmlFor="location">Where</label>
        <input
          onChange={this.onInputChange}
          type="text"
          id="location"
          name="searchLocation"
          placeholder={
            this.props.searchValues.searchLocation
              ? this.props.searchValues.searchLocation
              : "town or city"
          }
        />
        <button>Search Jobs</button>
      </form>
    );
  }
}

const mapStateToProps = ({ searchValues }) => ({ searchValues });

export default withRouter(
  connect(mapStateToProps, { storeSearchValues })(SearchBar)
);
