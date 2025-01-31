import React from 'react';
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Slide, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';


export default function ProductDetails() {
    const { productId } = useParams();
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
            const navigate = useNavigate();

            const response = await axios.post(`${import.meta.env.VITE_BURL}/cart`,
                {
                    productId: productId
                },
                {
                    headers: {
                        Authorization: `Tariq__${token}`,
                    }
                }
            );
            if (response.status == 201) {
                toast.success('product added to cart', {
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
                navigate('/cart');
            }
        } catch (error) {
            console.log("error", error);
        }

    }

    return (
        <section className="product container py-5 w-100">
            <div className="row justify-content-center">
                <div className="col-10">
                    <Card style={{ display: 'flex', flexDirection: 'row' }}>
                        <div >
                            <Card.Img
                                variant="top"
                                src={product.mainImage.secure_url}
                                alt={product.name}
                                style={{
                                    width: '350px',
                                    height: '450px',
                                }}
                            />
                        </div>

                        <div className='d-flex '>
                            {product.subImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.secure_url}
                                    alt={`subimage-${index}`}
                                    style={{
                                        width: '200px',
                                        height: '300px',

                                    }}
                                />
                            ))}
                        </div>
                    </Card>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            <strong>Price:</strong> ${product.finalPrice}
                        </Card.Text>
                        <Card.Text>
                            <strong>Rating:</strong> {data.avgRating ? data.avgRating.toFixed(1) : 'N/A'} / 5
                        </Card.Text>
                        <Card.Text>
                            <strong>Category:</strong> {product.category}
                        </Card.Text>
                        <Button type="submit" onClick={() => addProductToCart(product._id)}> add product to cart </Button>
                    </Card.Body>
                </div>
            </div>
        </section>
    );
}
