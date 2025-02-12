import React from 'react'
import Product from '../product/Product.jsx';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';

export default function () {

    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products`);
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="shadow-sm border-top border-bottom py-3" >
            <div className="products container py-5">
                <div className="row">
                    {data.products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
