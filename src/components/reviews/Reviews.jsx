import React from 'react';
import useFetch from '../../assets/hooks/useFetch.jsx';
import Loading from '../loading/Loading.jsx';
import { useParams } from 'react-router-dom';

export default function Reviews() {
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
        <div className=' p-5 d-flex flex-column gap-2 justify-content-center align-items-center'>
            {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                    <div key={index} className='p-3 border rounded w-75'>
                        <p><strong>{review.createdBy.userName}:</strong> {review.comment}</p>
                        <p><strong>Rating:</strong> {review.rating} / 5</p>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
}
