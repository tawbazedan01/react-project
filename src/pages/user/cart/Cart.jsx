import React, { useState, useEffect, useContext } from 'react';
import Loading from '../../../components/loading/Loading';
import SectionFooter from '../../../components/user/footerSection/SectionFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './cart.module.css';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../../components/user/context/CartContext';
import CustomButton from '../../../assets/hooks/customButton/CustomButton.jsx';


export default function Cart() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartCount, setCartCount } = useContext(CartContext); // تم إضافة useContext هنا

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

  const incQty = async (productId) => {
    const token = localStorage.getItem('userToken');
    const response = await axios.patch(`${import.meta.env.VITE_BURL}/cart/incraseQuantity`,
      {
        productId: productId
      },
      {
        headers: {
          Authorization: `Tariq__${token}`,
        }
      }
    );
    setCartCount(cartCount + 1);
    getCart();
    console.log(response);
  }

  const decQty = async (productId) => {
    const token = localStorage.getItem('userToken');
    const response = await axios.patch(`${import.meta.env.VITE_BURL}/cart/decraseQuantity`,
      {
        productId: productId
      },
      {
        headers: {
          Authorization: `Tariq__${token}`,
        }
      }
    );
    getCart();
    setCartCount(cartCount - 1);
    console.log(response);
  }

  const removeItem = async (productId) => {
    const token = localStorage.getItem('userToken');
    const response = await axios.patch(`${import.meta.env.VITE_BURL}/cart/removeItem`,
      {
        productId: productId
      },
      {
        headers: {
          Authorization: `Tariq__${token}`,
        }
      }
    );
    getCart();
    console.log(response);

  }

  const clearCart = async () => {
    const token = localStorage.getItem('userToken');

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BURL}/cart/clear`,
        null,
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );

      console.log('Response:', response);

      setCartCount(0);
      getCart();
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };





  return (
    <>
      <div className={`d-flex flex-column align-items-center ${style.cart}`}>
        <img src={logo2} alt="logo" />
        <h2>Cart</h2>
      </div>

      <section className={`p-5 m-1 ${style.cart2}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className={`d-flex flex-column ${style.contant}`}>
                <div className="table-responsive">
                  <Table striped bordered hover responsive>
                    <thead className={style.heading}>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map(item => (
                        <tr key={item._id}>
                          <td>
                            <div className={`d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center ${style.contant1}`}>
                              <div className={` pt-4 ${style.pic}`}>
                                <img src={item.details.mainImage.secure_url} alt="product" width="55px" style={{ maxWidth: '100%' }} />
                              </div>
                              <span className={style.productName}>{item.details.name}</span>
                            </div>
                          </td>
                          <td>
                            <div className={`pt-5 pb-5 d-flex justify-content-center align-items-center ${style.contant1}`}>
                              <span>{item.details.finalPrice}$</span>
                            </div>
                          </td>
                          <td>
                            <div className="ps-1">
                              <div className={` d-flex  gap-2 ps-5 pt-5 pb-5 ${style.contant2}`}>
                                <button className={`${style.qty}`} onClick={() => { incQty(item.productId) }}>+</button>
                                <span className='d-flex justify-content-center align-items-center'>{item.quantity}</span>
                                <button className={`${style.qty}`} onClick={() => { decQty(item.productId) }}>-</button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="">
                              <div className={`pt-5  d-flex gap-4 justify-content-center align-items-center ${style.contant2}`}>
                                <span>{item.quantity * item.details.finalPrice}$</span>
                                <FontAwesomeIcon className={style.icon} onClick={() => { removeItem(item.productId) }} icon={faTrash} />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className='d-flex justify-content-end gap-3 text-center'>
                    <Link to="/products" className={`${style.shopping}`}>Continue Shopping</Link>
                    <CustomButton type="delete" onClick={() => { clearCart() }} text="Clear Cart" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className={`ps-5 pb-5 ${style.cartTotal}`}>
                <h3 className='pt-5'>Cart Totals</h3>
                <div className='pt-3 d-flex flex-column gap-4'>
                  <div className="d-flex gap-5">
                    <h6>Subtotal</h6>
                    <span className={style.total1}>Rs. 250,000.00</span>
                  </div>
                  <div className="d-flex gap-5">
                    <h6>Total</h6>
                    <span className={style.total2}>Rs. 250,000.00</span>
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
