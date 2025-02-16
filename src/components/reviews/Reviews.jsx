import React, { useState, useEffect } from 'react';
import useFetch from '../../assets/hooks/useFetch.jsx';
import Loading from '../loading/Loading.jsx';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // استيراد أيقونة النجمة
import { toast } from 'react-toastify'; // استيراد التوست
import axios from 'axios';
import { Button } from 'react-bootstrap';
import style from './review.module.css';

export default function Reviews() {
    const { productId } = useParams();
    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products/${productId}`);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [hasPurchased, setHasPurchased] = useState(false); // حالة شراء المستخدم
    const [isSubmitting, setIsSubmitting] = useState(false); // حالة إرسال التعليق

    useEffect(() => {
        const checkPurchase = async () => {
            const token = localStorage.getItem('userToken');
            if (!token) {
                setHasPurchased(false);
                return;
            }
            // هنا من المفترض أن نقوم بالتحقق مما إذا كان المستخدم قد اشترى المنتج
            setHasPurchased(true);
        };

        checkPurchase();
    }, [productId]);

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

    const handleSubmit = async () => {
        if (!hasPurchased) {
            // عرض التوست مباشرة عند الضغط على زر Submit إذا لم يكن قد اشترى المنتج
            toast.error(
                "You cannot add a review because you have not purchased the product.\n\nYou can only add a review if you have purchased this product.",
                {
                    duration: 6000, // عرض التوست لمدة 6 ثوانٍ
                }
            );
            return; // توقف التنفيذ عند هذه النقطة
        }

        if (comment && rating > 0) {
            setIsSubmitting(true);
            const token = localStorage.getItem('userToken');
            try {
                const response = await axios.post(`${import.meta.env.VITE_BURL}/products/${productId}/review`, {
                    comment: comment,
                    rating: rating,
                }, {
                    headers: {
                        Authorization: `Token__${token}`,
                    }
                });

                // هنا نتأكد من أن التوست سيظهر فقط إذا كان الرد إيجابيًا
                if (response.data.success) {
                    toast.success("Your review has been added successfully!");
                    setComment('');
                    setRating(0);
                } else {
                    // يمكنك فقط إضافة هذه الرسالة إذا كنت ترغب في إظهار شيء عند فشل الإرسال.
                    // toast.error("Failed to submit your review.");
                }
            } catch (error) {
                // تجاهل رسائل الخطأ الخاصة بالـ API هنا
                // وعرض فقط رسالة التوست التحذيرية إذا لم يشترِ المنتج
            } finally {
                setIsSubmitting(false);
            }
        } else {
            toast(
                "You cannot add a review because you have not purchased the product.\n\nYou can only add a review if you have purchased this product.",

                {
                    duration: 6000,
                }
            );
        }
    };

    return (
        <div className='pt-2 d-flex flex-column gap-3 justify-content-center align-items-center'>
            {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                    <div key={index} className='p-3 border rounded w-75 w-md-100'>
                        <p><strong>{review.createdBy.userName}:</strong> {review.comment}</p>
                        <p>
                            <strong>Rating:</strong> {review.rating}
                            <FaStar color="orange" /> {/* أيقونة النجمة بلون أصفر */}
                        </p>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}

            {/* إضافة التعليق فقط إذا كان المستخدم قد اشترى المنتج */}
            {hasPurchased ? (
                <div className="w-75 w-md-100 mt-4">
                    <textarea
                        value={comment}
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
                                    color={rating <= rating ? 'orange' : 'gray'}
                                    onClick={() => handleRatingChange(rating)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </div>
                        <Button
                            className={`${style.customButton} `} // يمكن تعديل هذه الفئة في CSS
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : hasPurchased ? 'Submit Review' : 'You must purchase the product to review'}
                        </Button>

                    </div>
                </div>
            ) : (
                <p>You can only add a review if you have purchased this product.</p>
            )}
        </div>
    );
}
