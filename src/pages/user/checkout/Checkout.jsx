import React from 'react';
import SectionFooter from '../../../components/user/footerSection/SectionFooter.jsx';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import style from './checkout.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';


export default function Checkout() {
    return (
        <div>
            <div className={` d-flex flex-column ${style.bgImage1}`}>
                <img src={logo2} alt="logo" />
                <h2 className={style.overlayText1}>Checkout</h2>
            </div>

            <Container>
                <Row className='p-5'>
                    <Col md={6}>
                        <div>
                            <div className='p-3'>
                                <h2>Billing details</h2>
                            </div>
                            <Form >
                                <div className='d-flex flex-column gap-3 p-3'>
                                    <div className='d-flex gap-3'>
                                        <div>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Company Name (Optional)</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Street address</Form.Label>
                                        <Form.Control type="text" placeholder="" required />
                                    </Form.Group>
                                    <Form.Select aria-label="Default select example" required>
                                        <option>Town / City</option>
                                        <option value="1">Tulkarm</option>
                                        <option value="2">Nablus</option>
                                        <option value="3">Ramallah</option>
                                        <option value="4">Hebron</option>
                                        <option value="5">Jenin</option>
                                        <option value="6">Bethlehem</option>
                                        <option value="7">Jericho</option>
                                        <option value="8">Gaza</option>
                                        <option value="9">Qalqilya</option>
                                        <option value="10">Salfit</option>
                                        <option value="11">Rafah</option>
                                        <option value="12">Beit Lahia</option>
                                        <option value="13">Deir al-Balah</option>
                                        <option value="14">Khan Yunis</option>
                                        <option value="15">Jerusalem</option>

                                    </Form.Select>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="" />
                                    </Form.Group>

                                    <FloatingLabel
                                        controlId="floatingTextarea"
                                        label="Additional information"
                                        className="mb-3"
                                    >
                                        <Form.Control as="textarea" placeholder="" />
                                    </FloatingLabel>
                                </div>

                            </Form>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div className={`p-5 border rounded ${style.CheckTotal}`}>
                            <div className='pt-3 d-flex flex-column gap-2'>
                                <div className='d-flex flex-column gap-4 border-bottom '>
                                    <div className='d-flex justify-content-between'>
                                        <div className={`${style.product}`}>
                                            <h6>Product</h6>
                                            <span className={style.total2}>productName</span>
                                        </div>
                                        <div className={`${style.subtotal}`}>
                                            <h6>Subtotal</h6>
                                            <span className={style.total3}>Rs. 250,000.00</span>
                                        </div>
                                    </div>
                                    <div className={`${style.total} d-flex justify-content-between`}>
                                        <span>Total</span>
                                        <h4>Rs. 250,000.00</h4>
                                    </div>
                                </div>

                                <div className='text-center d-flex justify-content-center align-items-center '>
                                    <p>
                                        Your personal data will be used to support your experience throughout this website, to manage access to your account,
                                        and for other purposes described in our <Link to={"#"} className={style.link1}>privacy policy</Link>.
                                    </p>
                                </div>
                                <div className={`${style.order} d-flex justify-content-center align-items-center`}>
                                    <Link to="/orders">Place order</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <SectionFooter />
        </div>
    )
}
