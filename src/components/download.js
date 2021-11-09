import React from "react";
import { Row, Col } from "reactstrap";
import GooglePay from "../assets/images/googlePay.png";
import AppleStore from "../assets/images/AppleStore.png";

class Download extends React.Component {
  render() {
    return (
      <div id="Download">
        <div className="download-container">
          <div className="download_row">
            <Row>
              <Col md={4}>
                <h1>Download Now</h1>
              </Col>
              <Col md={8}>
                <img src={GooglePay} alt="GooglePay" />
                <img src={AppleStore} alt="AppleStore" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
