import React, { useEffect, useState } from 'react';
import OedersHeader from '../../../../components/header/OedersHeader.jsx';
import style from './orders.module.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../../../components/loading/Loading.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const token = localStorage.getItem('userToken');

  const getOrders = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/order`, {
        headers: { Authorization: `Tariq__${token}` },
      });

      console.log("Orders Response:", response.data.orders); // تأكيد الداتا

      if (response.data && response.data.orders) {
        setOrders(response.data.orders); // خزني كل الطلبات
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Something went wrong. Please try again later!");
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    getOrders();
  }, []);

  const cancelOrder = async (productId) => {
    setDeletingId(productId);
    try {
      const response = await axios.patch(`${import.meta.env.VITE_BURL}/order/cancel/${productId}`,
        {},
        {
          headers: { Authorization: `Tariq__${token}` },
        });

      if (response.data.order.status === "pending") {
        toast.success("Order cancelled successfully!");
        setOrders((prevOrders) => prevOrders.filter(order => order.productId !== productId));
      } else {
        toast.error("Cannot cancel this order. It has already been processed.");
      }

    } catch (error) {
      toast.error("Failed to cancel order. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };


  return (
    <div className='ps-5'>
      <OedersHeader />
      <div className='pt-5 d-flex justify-content-center align-items-center'>
        <h2>Check Your Orders Out!</h2>
      </div>

      <section className={`pt-4 ps-5 pe-5 pb-5 m-1 ${style.cart}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className={`d-flex flex-column ${style.contant3}`}>
                {isLoading ? (
                  <p className="text-center"><Loading /></p>
                ) : (
                  <div className="table-responsive">
                    <Table striped bordered hover responsive>
                      <thead className={style.heading}>
                        <tr>
                          <th>Product ID</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th>Cancel</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.length > 0 ? (
                          orders.map((order) =>
                            order.products.map((product) => (
                              <tr key={product._id}>
                                <td className={`${style.productName}`}>{product.productId.name}</td>
                                <td>${product.unitPrice}</td>
                                <td>{product.quantity}</td>
                                <td>${product.finalPrice.toFixed(2)}</td>
                                <td className={`${style.icon}`}>
                                  {deletingId === product._id ? (
                                    <Loading size="20px" />
                                  ) : (
                                    <FontAwesomeIcon
                                      onClick={() => cancelOrder(product._id)}
                                      icon={faTrash}
                                      className={style.trash}
                                    />
                                  )}
                                </td>
                              </tr>
                            ))
                          )
                        ) : (
                          <tr>
                            <td colSpan="5" className="text-center">No orders found</td>
                          </tr>
                        )}

                      </tbody>
                    </Table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
