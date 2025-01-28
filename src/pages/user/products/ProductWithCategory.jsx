import React from 'react';
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import { useParams } from 'react-router-dom';

export default function ProductWithCategory() {
    const { catrgoryId } = useParams();
    const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products/category/${catrgoryId}`);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {error && <div className='alert alert-danger'>{error}</div>}
            <div className="products container py-5">
                <div className="row">
                    {data.products.map((product) => {
                        return (
                            <div key={product._id} className="col-3">
                                <div>
                                    <img src={product.mainImage.secure_url} width={150} alt={product.name} />
                                    <h3>{product.name}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
