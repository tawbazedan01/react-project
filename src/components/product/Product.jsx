import React from 'react'
import { Link } from 'react-router-dom';
import style from './product.module.css';

const Product = ({ product }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className={`${style.product} d-flex flex-column gap-3`}>
        <div className={`${style.pic} d-flex justify-content-center align-items-center`}>
          <img className='' src={product.mainImage.secure_url} width='150px' alt={product.name} />
        </div>
        <div className='d-flex flex-column ps-1'>
          <h6>{product.name}</h6>
          <div className={`${style.price} d-flex justify-content-between pe-4`}>
            <span>{product.finalPrice} $</span>
            <span>{product.price} $</span>
          </div>

          <Link className={`${style.link} ms-5 pt-2 pb-2 mt-3 mb-3`} to={`/products/${product._id}`}>View Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

