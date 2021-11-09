import React from "react";
import { Label, Row, Col } from "reactstrap";
import Rewards from "../assets/images/rewards.png";
import Business from "../assets/images/business.png";
import WeFeatures from "../assets/images/We_Features.png";

class Features extends React.Component {
  render() {
    return (
      <div id="Features">
        <div className="features-container">
          <div className="weowns_features">
            <Row>
              <Col md={8}>
                <p>
                  Share your voice and earn <br /> WEOWNS.
                </p>
              </Col>
              <Col md={4} className="textcenterPr">
                <span>WEOWNS</span>
              </Col>
            </Row>
          </div>
          <Row className="featuresRow">
            <Col md={6}>
              <div className="features-content">
                <img src={Rewards} alt="Rewards" />
                <Label>
                  Reward yourself by sharing <br />
                  your thoughts.
                </Label>
                <p>
                  By incentivizing social media use, we can create a healthier
                  internet culture by rewarding positive behavior rather than
                  punishing negative behavior.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="features-content">
                <img src={Business} alt="Business" />

                <Label>
                  More than just tool - it's a <br />
                  business tool too!
                </Label>
                <p>
                  The app has been created in response to the increasing amount
                  of fake accounts and bot activity that is often seen on
                  popular platforms like Facebook, Instagram, Twitter etc.
                </p>
              </div>
            </Col>
          </Row>
          <div className="features_card">
            <Row>
              <Col md={8}>
                <div className="feature_card_left">
                  <span>What is WeownomyChat?</span>
                  <p>
                    The only social media app that rewards you <br />
                    for engaging with others.
                  </p>
                  <span>Get rewarded for your posts.</span>
                  <p>
                    Your post gets a WEOWN when it's liked, shared or <br />
                    commented on by another user.
                  </p>
                  <span>Use your WEOWNS to get more likes and shares.</span>
                  <p>
                    you can use your WEOWNS to like and share other people's
                    <br />
                    posts - in turn they'll give you some of their own!
                  </p>
                  <span>
                    Spend time doing what you love online without
                    <br /> having to spend money on ads.
                  </span>
                  <p>
                    Weownomychat lets you monetize the time spent <br />
                    interacting with social media - which we all do anyways!
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="featureImg">
                  <img src={WeFeatures} alt="WeFeatures" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
