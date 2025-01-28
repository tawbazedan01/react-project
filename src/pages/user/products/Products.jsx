import React from 'react'
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import style from './products.module.css';

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
                    <div className="">
                      <img src={product.mainImage.secure_url} width={150} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}
