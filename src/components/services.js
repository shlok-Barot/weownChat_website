import React from "react";
import { Label, Row, Col } from "reactstrap";
import Cryptocurrency from "../assets/images/Cryptocurrency.png";
import SocialThumb from "../assets/images/SocialThumb.png";
import image_1 from "../assets/images/image_1.png";
import image_2 from "../assets/images/image_2.png";
import image_3 from "../assets/images/image_3.png";
import image_4 from "../assets/images/image_4.png";

class OurService extends React.Component {
  render() {
    return (
      <div id="ourServices" className="services">
        <div className="service-container">
          <Row className="serviceRow">
            <Col md={6}>
              <div className="service-content">
                <img src={Cryptocurrency} alt="Cryptocurrency" />
                <div>
                  <Label>
                    Reward Social Media Users <br />
                    with Cryptocurrency
                  </Label>
                  <p>
                    By incentivizing social media use, we can create a healthier
                    internet culture by rewarding positive behavior rather than
                    punishing negative behavior.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="service-content">
                <img src={SocialThumb} alt="SocialThumb" />
                <div>
                  <Label>
                    Increase Engagement on <br />
                    Social Media Platforms
                  </Label>
                  <p>
                    The app has been created in response to the increasing
                    amount of fake accounts and bot activity that is often seen
                    on popular platforms like Facebook, Instagram, Twitter etc.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="service-works">
          <Row>
            <div className="service-bg-img">
              <div className="service_card">
                <Row>
                  <Col md={3}>
                    <div className="service_row">
                      <img src={image_1} alt="image_1" />
                      <div className="service_details">
                        <span>How It Works.</span>
                        <p>
                          Workspace is our craft. From focused offices to
                          personalised headquarters, we bring 10 years of design
                          and operational.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="service_row">
                      <img src={image_2} alt="image_2" />
                      <div className="service_details">
                        <span>You create your campaign.</span>
                        <p>
                          Set the parameters of your campaign and choose how
                          many tokens you want to award per engagement, then
                          launch it on WeownomyChat or Weownomy Web where all of
                          your followers can join in the fun!
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="service_row">
                      <img src={image_3} alt="image_3" />
                      <div className="service_details">
                        <span>Users engage with you.</span>
                        <p>
                          Your fans will be rewarded with WEOWNS for liking,
                          commenting, following and sharing posts from your
                          page. They'll also earn more tokens by inviting their
                          friends to become part of the movement too!.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="service_row">
                      <img src={image_4} alt="image_4" />
                      <div className="service_details">
                        <span>Collect rewards & grow follower base</span>
                        <p>
                          Once they've collected enough points, users can redeem
                          their WEOWNS for products or services that are offered
                          by brands who support WeownomyChat.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default OurService;
