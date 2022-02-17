import React, { Component } from "react";
import Home from "./Home/index";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    }
  };

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
