import React, { useContext } from 'react';
import useFetch from '../../../../assets/hooks/useFetch.jsx';
import Loading from '../../../../components/loading/Loading.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Slide, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Header from '../../../../components/header/Header.jsx';
import style from './details.module.css';
import { CartContext } from '../../../../components/user/context/CartContext.jsx';

export default function ProductDetails() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { cartCount, setCartCount } = useContext(CartContext);
    
    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products/${productId}`);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const product = data?.product;

    const addProductToCart = async () => {
        try {
            const token = localStorage.getItem("userToken");
            const response = await axios.post(`${import.meta.env.VITE_BURL}/cart`,
                { productId },
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    }
                }
            );
            if (response.status === 201) {
                toast.success('Product added to cart', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
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
            <section className="product container py-5 w-100">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className={`d-flex gap-5`}>
                            <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                                {product.subImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.secure_url}
                                        alt={`subimage-${index}`}
                                        width='60px'
                                    />
                                ))}
                            </div>
                            <div>
                                <Card.Img
                                    variant="top"
                                    src={product.mainImage.secure_url}
                                    alt={product.name}
                                    style={{ width: '350px', height: '450px' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text><strong>Price:</strong> ${product.finalPrice}</Card.Text>
                            <Card.Text><strong>Rating:</strong> {data.avgRating ? data.avgRating.toFixed(1) : 'N/A'} / 5</Card.Text>
                            <Card.Text>{product.description}</Card.Text>
                            <Button className={`${style.add}`} onClick={addProductToCart}>Add to Cart</Button>
                        </Card.Body>
                        <div>
                            <Card.Text><strong>Slug:</strong> {product.slug}</Card.Text>
                            <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
