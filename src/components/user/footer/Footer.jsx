import React from 'react'
import { Link } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from './footer.module.css'

export default function Footer() {
  return (
    <>
      <section className='p-5'>
        <div className='container'>
          <div className="row d-flex flex-column flex-lg-row justify-content-evenly ">
            <div className={`   col-md-3 col-12   ${style.title}  `}>
              <h3>Funiro.</h3>
              <p className='pt-5'>
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div className={`  col-md-9 col-12 ${style.links}  `}>
              <div className='d-flex justify-content-evenly pt-3 pb-3 flex-column flex-md-row  gap-3 gap-md-4'>
                <div>
                  <h6><Link to='#'>Links</Link></h6>
                  <ul className='pt-3 d-flex flex-column gap-4'>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Shop</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h6><Link to='#'>Help</Link></h6>
                  <ul className='pt-3 d-flex flex-column gap-4'>
                    <li><Link to="#">Payment Options</Link></li>
                    <li><Link to="#">Returns</Link></li>
                    <li><Link to="#">Privacy Policies</Link></li>
                  </ul>
                </div>
                <div>
                  <h6><Link to='#'>Newsletter</Link></h6>
                  <Form className='pt-3 d-flex flex-column flex-md-row gap-2'>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter Your Email Address"
                      className={`${style.input1} mb-3`}
                    >
                      <Form.Control type="email" placeholder="" required />
                    </FloatingLabel>
                    <button type="submit" className={`${style.sub}`}>SUBSCRIBE</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.copy} pt-4`}>
            <p>2025 furino. All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  )
}
