import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../App.css";

function Home() {
  return (
    <div className="Container" id="homeContainer">
      <ReactBootstrap.Row className="row">
        <ReactBootstrap.Col className="col-lg-12" id="homeNameCol">
          <h1 id="nameHome">Miroslava Aguilera</h1>
        </ReactBootstrap.Col>
      </ReactBootstrap.Row>
      <ReactBootstrap.Row className="row">
          <ReactBootstrap.Col className="col-md-4" id="homePicEmptyCol"><div></div></ReactBootstrap.Col>
        <ReactBootstrap.Col className="col-md-4" id="profilePicCol">
          <img
            id="profilePicHome"
            alt="Miro Aguilera"
            src={require("../Images/ProfilePic.png")}
          />
        </ReactBootstrap.Col>
        <ReactBootstrap.Col className="col-md-4" id="homePicEmptyCol"><div></div></ReactBootstrap.Col>
      </ReactBootstrap.Row>
    </div>
  );
}

export default Home;
