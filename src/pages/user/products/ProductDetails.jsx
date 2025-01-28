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
        <section className='product'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.mainImage.secure_url} alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> ${product.finalPrice}
                    </Card.Text>
                    <Card.Text>
                        <strong>Rating:</strong> {data.avgRating.toFixed(1)} / 5
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
}
