import React from 'react'
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import style from './products.module.css';
import { Link } from 'react-router-dom';

export default function Products() {
   const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products`);
  
    if (isLoading) {
      return <Loading />;
    }
  return (
    <div>
       {error ? <div className='alert alert-danger'>{error}</div> : ''}
       <div className={`${style.bgImage1}`}>
               <h2 className={style.overlayText1}>Products</h2>
             </div>
            <div className="products container py-5">
              <div className="row ">
                {data.products.map((product) => (
                  <div key={product._id} className={`col-3`}>
                    <div className="d-flex flex-column">
                      <img src={product.mainImage.secure_url} width={150} />
                      <Link to={`/products/${product._id}`}> Product Details </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}
