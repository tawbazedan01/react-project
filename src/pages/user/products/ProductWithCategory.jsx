import React, { useEffect, useState } from 'react';
import Loading from '../../../components/loading/Loading.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
            <div className="products container py-5">
                <div className="row">
                    {products.map(product => 
                        <div key={product._id} className="col-3">
                            <div>
                                <img src={product.mainImage.secure_url} width={150} alt={product.name} />
                                <h3>{product.name}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
