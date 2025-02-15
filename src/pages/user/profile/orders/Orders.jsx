import React from 'react';
import OedersHeader from '../../../../components/header/OedersHeader.jsx';
import style from './orders.module.css';
import Table from 'react-bootstrap/Table';

export default function Orders() {
  return (
    <div className='ps-5'>
      <OedersHeader />

      <div className=' pt-5 d-flex justify-content-center align-items-center '>
        <h2> Check Your Orders Out! </h2>
      </div>

      <section className={`pt-4 ps-5 pe-5 pb-5 m-1 ${style.cart2}`}>
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
                      {/* Example Row - Replace with dynamic data */}
                      <tr>
                        <td>
                          <div className={`d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center ${style.contant1}`}>
                            <div className={`pt-4 ${style.pic}`}>
                              <img src="path_to_product_image.jpg" alt="product" width="55px" style={{ maxWidth: '100%' }} />
                            </div>
                            <span className={style.productName}>Product Name</span>
                          </div>
                        </td>
                        <td>$100</td>
                        <td>2</td>
                        <td>$200</td>
                      </tr>

                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
