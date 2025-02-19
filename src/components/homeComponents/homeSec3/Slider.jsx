import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from '../../../assets/images/home/section3/Rectangle1.png';
import image2 from '../../../assets/images/home/section3/Rectangle2.png';
import image3 from '../../../assets/images/home/section3/Rectangle3.png';
import image4 from '../../../assets/images/home/section3/Rectangle4.png';
import image5 from '../../../assets/images/home/section3/Rectangle5.png';
import image6 from '../../../assets/images/home/section3/Rectangle6.png';
import image7 from '../../../assets/images/home/section3/Rectangle7.png';
import image8 from '../../../assets/images/home/section3/Rectangle8.png';
import image9 from '../../../assets/images/home/section3/Rectangle9.png';
import style from './section.module.css';

export default function Slider() {
  return (
    <Container className="d-md-none">
      <div className="d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
        <h2>#FuniroFurniture</h2>
        <span>Share your setup with</span>
      </div>
      <Row className="p-3">
        <Col md={5} className="d-flex flex-column ">
          <div className="d-flex mb-3">
            <img className='' src={image1} alt="images" width="150px" style={{ marginRight: "10px" }} />
            <img className='' src={image3} alt="images" width="300px" />
          </div>
          <div className="d-flex">
            <img className='' src={image2} alt="images" width="230px" style={{ marginRight: "10px" }} />
            <img className='' src={image4} alt="images" width="240px" />
          </div>
        </Col>
        <Col md={2} className="d-flex justify-content-center align-items-center ps-5">
          <div>
            <img className='' src={image5} alt="images" height="200px" width="150px" />
          </div>
        </Col>
        <Col md={5} className="d-flex flex-column ">
          <div className="d-flex align-items-end mb-3">
            <img className='' src={image7} alt="images" height="280" width="200px" style={{ marginRight: "10px" }} />
            <img className='' src={image9} alt="images" width="300px" />
          </div>
          <div className="d-flex ">
            <img className='' src={image6} alt="images" width="100px" style={{ marginRight: "10px" }} />
            <img className='' src={image8} alt="images" width="180px" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
