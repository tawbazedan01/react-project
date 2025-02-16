import React, { useState } from 'react';
import useFetch from '../../assets/hooks/useFetch.jsx';
import Loading from '../loading/Loading.jsx';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // استيراد أيقونة النجمة
import { toast } from 'react-toastify'; // استيراد التوست

export default function Reviews() {
    const { productId } = useParams();
    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products/${productId}`);
    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(0);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const product = data?.product;

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleRatingChange = (rating) => {
        setNewRating(rating);
    };

    const handleSubmit = () => {
     const token = localStorage.getItem
    };

    return (
        <div className='pt-2 d-flex flex-column gap-3 justify-content-center align-items-center'>
            {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                    <div key={index} className='p-3 border rounded w-75 w-md-100'>
                        <p><strong>{review.createdBy.userName}:</strong> {review.comment}</p>
                        <p>
                            <strong>Rating:</strong> {review.rating} / 5 
                            <FaStar color="orange" /> {/* أيقونة النجمة بلون أصفر */}
                        </p>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}

            {/* Add your own review */}
            <div className="w-75 w-md-100 mt-4">
                <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add your own review here"
                    className="form-control"
                    rows="3"
                />
                <div className="d-flex justify-content-between mt-2">
                    <div>
                        <span>Rating: </span>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <FaStar
                                key={rating}
                                color={rating <= newRating ? 'orange' : 'gray'}
                                onClick={() => handleRatingChange(rating)}
                                style={{ cursor: 'pointer' }}
                            />
                        ))}
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
}
