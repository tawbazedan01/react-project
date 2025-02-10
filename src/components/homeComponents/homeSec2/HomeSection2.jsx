import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import living1 from '../../../assets/images/home/section2/living1.png';
import living2 from '../../../assets/images/home/section2/living2.png';
import living3 from '../../../assets/images/home/section2/living3.png';


export default function HomeSection2() {
    return (
        <Container className='pt-5 pb-5'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2>Browse The Range</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Row className='ps-5 pe-5 pt-3'>

                <Col md={4} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={living1} alt="living" width="300px" />
                    <h6>Dining</h6>
                </Col>
                <Col md={4} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={living2} alt="living" width="300px" />
                    <h6>Living</h6>
                </Col>
                <Col md={4} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={living3} alt="living" width="300px" />
                    <h6>Bedroom</h6>
                </Col>
            </Row>
        </Container>
    )
}
