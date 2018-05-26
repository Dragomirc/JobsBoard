import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}
