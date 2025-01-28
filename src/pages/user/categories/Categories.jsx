import React from 'react'
import useFetch from '../../../assets/hooks/useFetch';
import Loading from '../../../components/loading/Loading.jsx';
import style from './categories.module.css';
import { Link } from 'react-router-dom';


export default function Categories() {
  const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/categories/active`);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      <div className={`${style.bgImage}`}>
        <h2 className={style.overlayText}>Categories</h2>
      </div>
      <div className="categories container py-5">
        <div className="row ">
          {data.categories.map((category) => (
            <div key={category._id} className={`col-3`}>
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
