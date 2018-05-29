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
      <form
        className="main-search-bar form-horizontal"
        onSubmit={this.onFormSubmit}
      >
        <div className="col-sm-5 col-md-5">
          <label htmlFor="search-term">What</label>
          <input
            className="form-control"
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
        </div>
        <div className="col-sm-4 col-md-5">
          <label htmlFor="location">Where</label>
          <input
            className="form-control"
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
        </div>

        <div className="form-submit col-sm-3 col-md-2">
          <button className="btn btn-primary">Search Jobs</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ searchValues }) => ({ searchValues });

export default withRouter(
  connect(mapStateToProps, { storeSearchValues })(SearchBar)
);
