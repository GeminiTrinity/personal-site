import React, { Component } from "react";
import Home from "../components/Pages/Home";
import Cinematography from "../components/Pages/Cinematography";
import Career from "../components/Pages/Career";
import WebDesign from "../components/Pages/WebDesign";
import NavTabs from "./NavTabs";

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
    } else if (this.state.currentPage === "Career") {
      return <Career />;
    } else if (this.state.currentPage === "WebDesign") {
      return <WebDesign />;
    } else {
      return <Home />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
