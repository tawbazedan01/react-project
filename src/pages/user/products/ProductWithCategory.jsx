import React, { useEffect, useState } from 'react';
import Loading from '../../../components/loading/Loading.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../../../components/product/Product.jsx';
import Cheader from '../../../components/header/Cheader.jsx';

export default function ProductWithCategory() {
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BURL}/products/category/${categoryId}`);
            setProducts(data.products);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Cheader />
            <div className="products container py-5">
                <div className="row">
                    {products.map(product =>
                        <Product key={product._id} product={product} />
                    )}
                </div>
            </div>
        </div>
    );
}
