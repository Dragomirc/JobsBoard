import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { storeSearchValues, fetchJobs } from "../actions/index";


class SearchBar extends Component {
  state = {
    keywords: "",
    locationName: ""
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { keywords, locationName } = this.state;
    const { storeSearchValues } = this.props;
    storeSearchValues(keywords, locationName);
    this.props.history.push(`/jobs/${keywords}/${locationName}`);
      
    
  };

  render() {
    const { keywords, locationName } = this.props.searchValues;
    return (
      <form
        className="main-search-bar form-group row"
        onSubmit={this.onFormSubmit}
      >
        <div className="col-sm-5 col-md-5">
          <label htmlFor="search-term">What</label>
          <input
            className="form-control"
            onChange={this.onInputChange}
            type="text"
            id="search-term"
            name="keywords"
            placeholder={keywords ? keywords : "e.g marketing manager"}
          />
        </div>
        <div className="col-sm-5 col-md-4">
          <label htmlFor="location">Where</label>
          <input
            className="form-control"
            onChange={this.onInputChange}
            type="text"
            id="location"
            name="locationName"
            placeholder={locationName ? locationName : "town or city"}
          />
        </div>

        <div className="col-sm-2 col-md-3 col-xs-12 main-search-bar__btn">
          <button className="btn btn-primary">Search Jobs</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ searchValues }) => ({ searchValues });

export default withRouter(
  connect(mapStateToProps, {
    storeSearchValues,
    fetchJobs
  })(SearchBar)
);
