import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './section3.module.css';
import image1 from '../../../assets/images/home/section3/Rectangle10.png';
import image2 from '../../../assets/images/home/section3/Rectangle11.png';
import image3 from '../../../assets/images/home/section3/Rectangle12.png';


export default function HomeSection4() {
  return (

    <Container>
      <Row className='pt-5 pb-5'>
        <Col md={10}>
          <div className={`${style.contant} d-flex gap-5 p-5`}>
            <div className={` pt-2 pb-4`}>
              <div className={`${style.contant2}`}>
                <h1>50+ Beautiful rooms inspiration</h1>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <Link>Explore More</Link>
              </div>
            </div>
            <div className='d-flex ps-5 gap-2 justify-content-start'>
              <img src={image1} width="220px" height="350px" alt="bg-pic" />
              <img src={image2} width="220px" height="290px" alt="bg-pic" />
              <img src={image3} width="220px" height="290px" alt="bg-pic" />
            </div>
          </div>

        </Col>

      </Row>
    </Container>

  )
}
