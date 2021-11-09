import React from "react";
import { Button, Label, Row, Col } from "reactstrap";
import HomeMobile from "../assets/images/homeMobile.png";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div className="container chat_home">
          <Row>
            <Col>
              <div className="lftdiv">
                <Label>Own your own</Label>
                <Label className="span_lbl">
                  <span className="mright_ten">social </span> network
                </Label>

                <p className="mtop15px">
                  The first global social network that pays you to use it.
                </p>

                <Button color="primary" className="mvp_btn" size="lg">
                  To Launch an MVP in December 2021
                </Button>
              </div>
            </Col>
            <Col className="home-col-right">
              <div className="home-backgrnd">
                <img src={HomeMobile} alt="Home" className="homeMo_img" />
              </div>
            </Col>
          </Row>
          <div className="weowns_home">
            <Row>
              <Col md={4} className="textcenterPr">
                <span>WEOWNS</span>
              </Col>
              <Col md={8}>
                <p>
                  1 billion people are about to get <br /> WEOWNS with
                  WeownomyChat
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
