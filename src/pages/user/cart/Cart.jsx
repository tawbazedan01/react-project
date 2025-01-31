import React from 'react';
import Loading from '../../../components/loading/Loading';
import useFetch from '../../../assets/hooks/useFetch';
import SectionFooter from '../../../components/user/footerSection/SectionFooter';
import style from './cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import product from '../../../assets/images/product/sofa.png';
import { Link } from 'react-router-dom';

export default function Cart() {

  const token = localStorage.getItem("userToken");
  const { data, isLoading, error } = useFetch(`${import.meta.env.VITE_BURL}/cart`,
    {
      headers: {
        Authorization: `Tariq__${token}`,
      }
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={`d-flex flex-column ${style.cart}`}>
        <img src={logo2} alt="logo" />
        <h2>Cart</h2>
      </div>

      <section className={`p-5 m-1 ${style.cart2}`}>
        <div className='container'>
          <div className="row">
            <div className="col-8">
              <div className={`d-flex flex-column gap-5 pt-2 pb-2 ps-5 pe-5 ${style.contant}`}>
                <div className={`d-flex justify-content-center align-items-center justify-content-between ps-5 pe-5 pt-2 pb-2 ${style.heading}`}>
                  <h6>Product</h6>
                  <h6>Price</h6>
                  <h6>Quantity</h6>
                  <h6>Subtotal</h6>
                </div>

                <div className='d-flex gap-5'>
                  <div>
                    <div className={`pt-4 d-flex gap-3 justify-content-center align-items-center ${style.contant1}`}>
                      <div className={style.pic}>
                        <img src={product} alt='product' width='70px' />
                      </div>
                      <span>Asgaard sofa</span>
                    </div>
                  </div>
                  <div>
                    <div className={`pt-5 ${style.contant1}`}>
                      <span>Rs. 250,000.00</span>
                    </div>
                  </div>
                  <div>
                    <div className={`pt-5 ${style.contant2}`}>
                      <span>1</span>
                    </div>
                  </div>
                  <div>
                    <div className={`pt-5 ps-5 d-flex gap-4 justify-content-center align-items-center ${style.contant2}`}>
                      <span>Rs. 250,000.00</span>
                      <FontAwesomeIcon className={`${style.icon}`} icon={faTrash} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className={`ps-5 pb-5 ${style.cartTotal}`}>
                <h3 className='pt-5'>Cart Totals</h3>
                <div className='pt-3 d-flex flex-column gap-4'>
                  <div className={`d-flex gap-5`}>
                    <h6>Subtotal</h6>
                    <span className={`${style.total1}`}>Rs. 250,000.00</span>
                  </div>
                  <div className={`d-flex gap-5`}>
                    <h6>Total</h6>
                    <span className={`${style.total2}`}>Rs. 250,000.00</span>
                  </div>
                  <div className={` ps-4 ${style.check}`}>
                    <Link>Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionFooter />
    </>
  );
}
