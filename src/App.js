import React from "react";

import "./App.css";
import NavBar from "./components/navBar";
import Formdata from "./components/form";
import { Container, Row, Col, Image } from "react-bootstrap";
function App() {
  return (
    <Container
      style={{
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
          ")",
      }}>
      <NavBar />
      <Row>
        <Col style={{ paddingTop: "150px" }}>
          <Image
            width="80%"
            src="https://www.teamwallpaper.com/images/categories/Nature/Mobile/5b5b7bec95dbf-nature-wallpaper.png"></Image>
        </Col>
        <Col
          style={{
            backgroundColor: "red",
            marginTop: "5em ",
            paddingTop: "50px",
            paddingBottom: "30px",
            borderTopLeftRadius: "70px",
            borderTopRightRadius: "70px",
          }}>
          <div>
            To Receive <br /> Promotional Coupons:
          </div>

          <Formdata />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
