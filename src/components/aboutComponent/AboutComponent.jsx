import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import image1 from '../../assets/images/bg-img/pro-img1.avif';
import image2 from '../../assets/images/bg-img/pro-img2.avif';
import image3 from '../../assets/images/bg-img/pro-img3.avif';

export default function AboutComponent() {
    return (
        <Container className="py-5">
            <Row className="justify-content-center mb-4">
                <Col md={12} className="text-center">
                    <h2 className="mb-4">Who We Are!</h2>
                    <p className="text-center w-75 mx-auto text-body-secondary">
                        We are a home decor and furniture store dedicated to bringing you unique, handmade pieces that reflect elegance and comfort. Our mission is to provide you with the best designs to make your living spaces feel more like home. Whether you're looking to refresh a room or fully redesign your space, we're here to help!
                    </p>
                </Col>
            </Row>

            <Row className="g-4">
                <Col md={4}>
                    <Card className="shadow-sm p-4 text-center">
                        <Card.Img variant="top" src={image1} alt="Handmade Pieces" />
                        <Card.Body>
                            <Card.Title className="h5">Handmade Pieces That Took Time to Make</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed eros vitae purus tincidunt vehicula ac sit amet libero.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm p-4 text-center">
                        <Card.Img variant="top" src={image2} alt="Exploring Decoration" />
                        <Card.Body>
                            <Card.Title className="h5">Exploring New Ways of Decorating</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula libero ac est bibendum, non tempor nunc condimentum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm p-4 text-center">
                        <Card.Img variant="top" src={image3} alt="Millennial Design" />
                        <Card.Body>
                            <Card.Title className="h5">Going All-In with Millennial Design</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius nunc id odio viverra, ac lacinia velit fermentum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
