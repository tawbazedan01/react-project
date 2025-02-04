import React, { useState, useEffect } from 'react';
import Loading from '../../../components/loading/Loading';
import SectionFooter from '../../../components/user/footerSection/SectionFooter';
import style from './cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Cart() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("userToken");

  const getCart = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/cart`, {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      });
      setData(response.data.products);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className={`d-flex flex-column ${style.cart}`}>
        <img src={logo2} alt="logo" />
        <h2>Cart</h2>
      </div>

      <section className={`p-5 m-1 ${style.cart2}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className={`d-flex flex-column ${style.contant}`}>
                <div className="table-responsive">
                  <table className="table">
                    <thead className={style.heading}>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th >Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data.map(item => (
                        <tr key={item._id}>
                          <td>
                            <div className={`d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center ${style.contant1}`}>
                              <div className={style.pic}>
                                <img src={item.details.mainImage.secure_url} alt="product" width="55px" style={{ maxWidth: '100%' }} />
                              </div>
                              <span className={`${style.productName}`}>{item.details.name}</span>
                            </div>
                          </td>
                          <td>
                            <div className={`pt-5 ${style.contant1}`}>
                              <span>{item.details.finalPrice}$</span>
                            </div>
                          </td>
                          <td>
                            <div className="ps-1">
                              <div className={`ps-5 pt-5 ${style.contant2}`}>
                                <span>{item.quantity}</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="">
                              <div className={`pt-5 ps-5 d-flex gap-4 justify-content-center align-items-center ${style.contant2}`}>
                                <span>{item.quantity * item.details.finalPrice}$</span>
                                <FontAwesomeIcon className={`${style.icon}`} icon={faTrash} />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
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
                  <div className={`ps-4 ${style.check}`}>
                    <Link to="/checkout">Checkout</Link>
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
