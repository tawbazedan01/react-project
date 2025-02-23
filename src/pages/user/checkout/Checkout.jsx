import React, { useState, useEffect, useContext } from 'react';
import SectionFooter from '../../../components/user/footerSection/SectionFooter.jsx';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import style from './checkout.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../../components/user/context/CartContext.jsx';
import { toast } from 'react-toastify';
import Loading from '../../../components/loading/Loading.jsx';

export default function Checkout() {
    const { subtotal, total } = useContext(CartContext);
    const [data, setData] = useState(null);
    const [couponName, setCouponName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const token = localStorage.getItem("userToken");

    const getCartData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BURL}/cart`, {
                headers: {
                    Authorization: `Tariq__${token}`,
                },
            });
            setData(response.data.products);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        getCartData();
    }, []);

    const getOrder = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BURL}/order`,
                {
                    couponName: couponName,
                    address: address,
                    phone: phone,
                },
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    },
                }
            );

            toast.success("Your order has been placed successfully!");
            navigate('/profile/orders');
        } catch (error) {
            toast.error("Something went wrong, please try again later!");
            console.error('Error placing order:', error);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <div>
            <div className={`d-flex flex-column ${style.bgImage1}`}>
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
                            <Form>
                                <div className='d-flex flex-column gap-3 p-3'>
                                    <div className='d-flex gap-3'>
                                        <div>
                                            <Form.Group className="mb-3" controlId="firstName">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    onChange={(e) => setCouponName(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group className="mb-3" controlId="lastName">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Form.Group className="mb-3" controlId="companyName">
                                        <Form.Label>Company Name (Optional)</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="streetAddress">
                                        <Form.Label>Street address</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={(e) => setAddress(e.target.value)} />
                                    </Form.Group>
                                    <Form.Select aria-label="Town / City" required>
                                        <option>Town / City</option>
                                        <option value="Tulkarm">Tulkarm</option>
                                        <option value="Nablus">Nablus</option>
                                        <option value="Ramallah">Ramallah</option>
                                        <option value="Hebron">Hebron</option>
                                        <option value="Jenin">Jenin</option>
                                        <option value="Bethlehem">Bethlehem</option>
                                        <option value="Jericho">Jericho</option>
                                        <option value="Gaza">Gaza</option>
                                        <option value="Qalqilya">Qalqilya</option>
                                        <option value="Salfit">Salfit</option>
                                        <option value="Rafah">Rafah</option>
                                        <option value="Beit Lahia">Beit Lahia</option>
                                        <option value="Deir al-Balah">Deir al-Balah</option>
                                        <option value="Khan Yunis">Khan Yunis</option>
                                        <option value="Jerusalem">Jerusalem</option>
                                    </Form.Select>
                                    <Form.Group className="mb-3" controlId="coupon">
                                        <Form.Label>Coupon Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            value={couponName}
                                            onChange={(e) => setCouponName(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            required
                                            type='phone'
                                            placeholder=""
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Form.Group>

                                    <FloatingLabel controlId="additionalInfo" label="Additional information" className="mb-3">
                                        <Form.Control as="textarea" placeholder="" />
                                    </FloatingLabel>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={`p-5 border rounded ${style.CheckTotal}`}>
                            <div className='pt-3 d-flex flex-column gap-2'>
                                <div className='d-flex flex-column gap-4 border-bottom'>
                                    <div className='d-flex justify-content-between'>
                                        <div className={`${style.product}`}>
                                            <h6>Product</h6>
                                            {data ? (
                                                data.map(item => (
                                                    <div key={item._id}>
                                                        <span className={style.total2}>{item.details.name} x {item.quantity}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <span>Loading products...</span>
                                            )}
                                        </div>
                                        <div className={`${style.subtotal}`}>
                                            <h6>Subtotal</h6>
                                            <span className={style.total3}>Rs. {subtotal}</span>
                                        </div>
                                    </div>
                                    <div className={`${style.total} d-flex justify-content-between`}>
                                        <span>Total</span>
                                        <h4>Rs. {total}</h4>
                                    </div>
                                </div>

                                <div className='text-center d-flex justify-content-center align-items-center '>
                                    <p>
                                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to={"#"} className={style.link1}>privacy policy</Link>.
                                    </p>
                                </div>
                                <div className={`${style.order} d-flex justify-content-center align-items-center`}>
                                    <Button type='button' onClick={getOrder} disabled={isLoading}>
                                        {isLoading ? <Loading /> : 'Place order'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <SectionFooter />
        </div>
    );
}
