import React, { useState, useEffect } from 'react';
import useFetch from '../../assets/hooks/useFetch.jsx';
import Loading from '../loading/Loading.jsx';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import CustomButton from '../../assets/hooks/customButton/CustomButton.jsx';

export default function Reviews() {
    const { productId } = useParams();
    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products/${productId}`);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const product = data?.product;

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleRatingChange = (rating) => {
        setRating(rating);
    };

    const review = async () => {
        const token = localStorage.getItem('userToken');

        if (!token) {
            toast.error("Please log in to submit a review.");
            return;
        }

        if (!comment || rating === 0) {
            toast.error("Please provide both a rating and a comment.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BURL}/products/${productId}/review`, {
                comment: comment,
                rating: rating,
            }, {
                headers: {
                    Authorization: `Tariq__${token}`,
                }
            });

            if (response.data.status === "deliverd") {
                toast.success("Your review has been added successfully!");
                setComment('');
                setRating(0);
            } else {
                toast.error("You cannot add a review because you have not purchased the product.");
            }
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            toast.error("An error occurred while submitting your review.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='pt-2 d-flex flex-column gap-3 justify-content-center align-items-center'>
            {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                    <div key={index} className='p-3 border rounded w-75 w-md-100'>
                        <p className='overflow-auto'><strong>{review.createdBy.userName}:</strong> {review.comment}</p>
                        <p>
                            <strong>Rating:</strong> {review.rating}
                            <FaStar color="orange" />
                        </p>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}

            <div className="w-75 w-md-100 mt-4">
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Add your own review here"
                    className="form-control"
                    rows="3"
                />
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-between mt-2">
                    <div>
                        <span>Rating: </span>
                        {[1, 2, 3, 4, 5].map((ratingValue) => (
                            <FaStar
                                key={ratingValue}
                                color={ratingValue <= rating ? 'orange' : 'gray'}
                                onClick={() => handleRatingChange(ratingValue)}
                                style={{ cursor: 'pointer' }}
                            />
                        ))}
                    </div>
                    <div>
                        <CustomButton
                            type="login"
                            text={isSubmitting ? 'Submitting...' : 'Submit Review'}
                            onClick={review}
                            disabled={isSubmitting}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
