import React, { Component } from "react";
import Home from "./Home/index";
import Cinematography from "./Pages/Cinematography";
import Sales from "./Pages/Sales";
import WebDesign from "./Pages/WebDesign";

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
    } else if (this.state.currentPage === "Cinematography") {
      return <Cinematography />;
    } else if (this.state.currentPage === "Sales") {
      return <Sales />;
    } else if (this.state.currentPage === "WebDesign") {
      return <WebDesign />;
    } else {
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
