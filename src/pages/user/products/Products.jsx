import React from 'react'
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import style from './products.module.css';
import { Link } from 'react-router-dom';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import SectionFooter from '../../../components/user/footerSection/SectionFooter';
import Product from '../../../components/product/Product.jsx';



export default function Products() {
  const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/products`);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      <div className={` d-flex flex-column ${style.bgImage1}`}>
        <img src={logo2} alt="logo" />
        <h2 className={style.overlayText1}>Products</h2>
      </div>
      <div className="products container py-5">
        <div className="row">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <SectionFooter />
    </div>

  )
}
