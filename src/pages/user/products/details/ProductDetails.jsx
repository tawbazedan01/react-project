import React, { useContext } from 'react';
import useFetch from '../../../../assets/hooks/useFetch.jsx';
import Loading from '../../../../components/loading/Loading.jsx';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Slide, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Header from '../../../../components/header/Header.jsx';
import style from './details.module.css';
import { CartContext } from '../../../../components/user/context/CartContext.jsx';
import { Row, Col, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function ProductDetails() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { cartCount, setCartCount } = useContext(CartContext);
    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products/${productId}`);

    if (isLoading) return <Loading />;
    if (error) return <div className="text-danger">Error: {error}</div>;

    const product = data?.product;

    const addProductToCart = async () => {
        try {
            const token = localStorage.getItem("userToken");
            const response = await axios.post(`${import.meta.env.VITE_BURL}/cart`,
                { productId },
                { headers: { Authorization: `Tariq__${token}` } }
            );
            if (response.status === 201) {
                toast.success('Product added to cart', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                    transition: Slide,
                });
                setCartCount(cartCount + 1);
                navigate('/cart');
            }
        } catch (error) {
            console.log("Error adding product to cart:", error.message);
        }
    };

    return (
        <>
            <Header />
            <section className="product container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Card className="p-4 shadow-sm border-0">
                            <div className="d-flex gap-4">
                                <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                                    {product.subImages.map((image, index) => (
                                        <img key={index} src={image.secure_url} alt={`subimage-${index}`} width='60px' />
                                    ))}
                                </div>
                                <Card.Img
                                    variant="top"
                                    src={product.mainImage.secure_url}
                                    alt={product.name}
                                    style={{ width: '350px', height: '450px', borderRadius: '10px' }}
                                />
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className="p-4 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className={`${style.card1}mt-3`}>{product.name}</Card.Title>
                                <Card.Text><strong>Price:</strong> ${product.finalPrice}</Card.Text>
                                <Card.Text><strong>Rating:</strong> {data.avgRating ? data.avgRating.toFixed(1) : ''} / 5</Card.Text>
                                <Button className={`${style.add} mt-3`} onClick={addProductToCart}>Add to Cart</Button>
                            </Card.Body>
                            <div className={`${style.card2}mt-3`}>
                                <Card.Text><strong>Slug:</strong> {product.slug}</Card.Text>
                                <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                                <div>
                                    <div className={`${style.icons}`}>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <div className={`m-5 ${style.bgSection}`} >
                <section className={`${style.navSection} p-3`}>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Nav className="d-flex justify-content-center align-items-center" variant="tabs">
                                    <Nav.Item>
                                        <Nav.Link as={Link} to={`/products/${productId}/description`}>Description</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to={`/products/${productId}/reviews`}>Reviews</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Outlet />
                    </Container>
                </section>
            </div>


        </>
    );
}
