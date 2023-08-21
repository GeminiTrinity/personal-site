import React from "react";
import { Container, Row, Col } from 'reactstrap';

function NavTabs(props) {
  return (
    <div class="navigation">
      <Container>
        <Row>
          <ul className="nav nav-tabs">
            <Col>
            <li className="nav-item">
              <a
                href="#career"
                onClick={() => props.handlePageChange("Career")}
                className={props.currentPage === "Career" ? "nav-link active" : "nav-link"}
              >
                Career
              </a>
            </li>
            </Col>
            <Col>
            <li className="nav-item">
              <a
                href="#Cinematography"
                onClick={() => props.handlePageChange("Cinematography")}
                className={props.currentPage === "Cinematography" ? "nav-link active" : "nav-link"}
              >
                Cinematography
              </a>
            </li>
            </Col>
            <Col>
            <li className="nav-item">
              <a
                href="#WebDesign"
                onClick={() => props.handlePageChange("WebDesign")}
                className={props.currentPage === "WebDesign" ? "nav-link active" : "nav-link"}
              >
                Web Design
              </a>
            </li>
            </Col>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default NavTabs;

