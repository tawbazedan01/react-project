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
          <div className="row d-flex justify-content-evenly">
            <div className="col-4">
              <h3>Funiro.</h3>
              <p>
                400 University Drive Suite 200 Coral Gables,
                FL 33134 USA
              </p>
            </div>
            <div className="col-8">
              <div className='d-flex justify-content-evenly'>
                <div>
                  <h4><Link href='#'>Links</Link></h4>
                  <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Shop</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact</Link></li>

                  </ul>
                </div>
                <div>
                  <h4><Link href='#'>Help</Link></h4>
                  <ul>
                    <li><Link>Payment Options</Link></li>
                    <li><Link>Returns</Link></li>
                    <li><Link>Privacy Policies</Link></li>

                  </ul>
                </div>
                <div>
                  <h4><Link href='#'>Newsletter</Link></h4>
                  <Form className=''>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter Your Email Address"
                      className="mb-3"
                    >
                      <Form.Control type="email" placeholder="name@example.com" />
                      <button type="submit">SUBSCRIBE</button>
                    </FloatingLabel>
                  </Form>

                </div>
              </div>
            </div>
          </div>
          <div className={style.copy}>
            <p>2025 furino. All rights reverved</p>
          </div>
        </div>
      </section>
    </>
  )
}
