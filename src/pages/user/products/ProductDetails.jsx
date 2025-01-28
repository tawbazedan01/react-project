import React from 'react';
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
                    </Card.Body>
                </div>
            </div>
        </section>
    );
}
