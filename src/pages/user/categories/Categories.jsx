import React from 'react'
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import style from './categories.module.css';
import { Link } from 'react-router-dom';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';



export default function Categories() {
  const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/categories/active`);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      <div className={`${style.bgImage} d-flex flex-column`}>
        <img src={logo2} alt="logo" />
        <h2 className={style.overlayText}>Categories</h2>
      </div>
      <div className="categories container py-5">
        <div className="row ">


          {data.categories.map((category) => (

            <div key={category._id} className={`col-12 col-md-6 col-lg-3 mb-3 mb-md-4 ${style.category12} `}>
              <Link to={`/categories/${category._id}`}>
                <div className={`${style.category1}`}>
                  <img src={category.image.secure_url} width={150} />
                </div>
              </Link>
            </div>

          ))}


        </div>
      </div>
    </>
  )
}
