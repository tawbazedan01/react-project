import React from 'react';
import useFetch from '../../assets/hooks/useFetch.jsx';
import Loading from '../loading/Loading.jsx';
import { useParams } from 'react-router-dom';

export default function Description() {
    const { productId } = useParams();
    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products/${productId}`);

    if (isLoading) return <Loading />;
    if (error) return <p className="text-danger">Error: {error.message}</p>;

    const product = data?.product;

    return (
        <div className='p-2 d-flex flex-column gap-2 justify-content-center align-items-center'>
            <div className='pt-2 pb-2'>
                <p>{product?.description || "No description available."}</p>
            </div>
            <div className='d-flex gap-2 pt-5 flex-column flex-md-row'>
                {product?.subImages?.map((image, index) => (
                    <img
                        key={index}
                        src={image.secure_url}
                        alt={`subimage-${index}`}
                        width='200px'
                    />
                ))}
            </div>

        </div>
    );
}
