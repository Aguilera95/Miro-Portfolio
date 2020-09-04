import React from "react";
import "../App.css";
import * as ReactBootstrap from "react-bootstrap";

function About() {
  return (
    <div className="Container" id="aboutContainer">
      <ReactBootstrap.Row className="row" id="aboutHeadRow">
        <ReactBootstrap.Col className="col-md-12" id="aboutHeadCol1">
        <h1 id="about">About Me</h1>
        </ReactBootstrap.Col>
      </ReactBootstrap.Row>
      <ReactBootstrap.Row className="row" id="aboutheadRow">
        <ReactBootstrap.Col className="col-md-3" id="profilePicCol">
          <img
            id="profilePic"
            alt="Sam Horne"
            src={require("../Images/ProfilePic.png")}
          />
        </ReactBootstrap.Col>
        <ReactBootstrap.Col className="col-md-8" id="aboutheadCol2">
          
          <p>
            I'm a utah based full stack web developer, just graduated from the University of Utah coding bootcamp.
          </p>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col className="col-md-1" id="emptyCol"><div></div></ReactBootstrap.Col>
      </ReactBootstrap.Row>
    </div>
  );
}

export default About;
