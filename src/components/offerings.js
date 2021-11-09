import React from "react";
import { Row, Col, Label } from "reactstrap";
import image_5 from "../assets/images/image_5.png";
import image_6 from "../assets/images/image_6.png";
import image_7 from "../assets/images/image_7.png";

class Offerings extends React.Component {
  render() {
    return (
      <div id="Offerings">
        <div className="offering-container">
          <h3>The Best Rewards For Your Social Efforts.</h3>
          <h5>
            Weownomy Chat is a new way to earn money from posting on <br />{" "}
            social media, the first of its kind.
          </h5>
          <div className="offer_row">
            <Row>
              <Col md={4}>
                <div className="OfferImg_card">
                  <img src={image_5} alt="image_5" className="img_5" />
                </div>
              </Col>
              <Col md={4}>
                <div className="OfferImg_card">
                  <img src={image_6} alt="image_6" />
                </div>
              </Col>
              <Col md={4}>
                <div className="OfferImg_card">
                  <img src={image_7} alt="image_7" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="weowns_offering">
            <Row>
              <Col md={8}>
                <p>
                  Get rewarded for your <br />
                  social media efforts.
                </p>
              </Col>
              <Col md={4} className="textcenterPr">
                <span>Rewarded</span>
              </Col>
            </Row>
          </div>
          <div className="offer_reward">
            <Row>
              <Col md={3}>
                <h2>50%</h2>
                <h5>
                  Reward system that increases <br /> engagement.
                </h5>
              </Col>
              <Col md={3}>
                <Label>
                  <span className="billion">2</span>.2 billion
                </Label>
                <h5>
                  Global potential users with <br />
                  WeownomyChat account.
                </h5>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Offerings;
