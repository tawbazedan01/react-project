import React from 'react'
import SectionFooter from '../../../components/user/footerSection/SectionFooter.jsx';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';
import style from './contact.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { motion } from 'framer-motion';



export default function Contact() {
  return (
    <div>
      <div className={` d-flex flex-column ${style.bgImage1}`}>
        <img src={logo2} alt="logo" />
        <h2 className={style.overlayText1}>Contact Us</h2>
      </div>
      <div className='p-5'>
        <Container>
          <div className='p-5 d-flex flex-column justify-content-center align-items-center gap-1'>
            <h2>Get In Touch With Us</h2>
            <p className='w-75 text-center text-body-secondary' >For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
              Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          </div>
          <Row className='pt-0 pb-5 ps-5 pe-5'>
            <motion.div
              className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-center"
              initial={{ x: -200 }}  // البداية من اليسار
              animate={{ x: 0 }}     // النهاية في المكان الأصلي
              transition={{ duration: 1.5 }}
            >
              <div className={`${style.contact1} d-flex flex-column gap-3 p-5`}>
                <div className='d-flex gap-3 ps-2'>
                  <div className={style.icon}>
                    <MdLocationPin />
                  </div>
                  <div className={style.contact2}>
                    <h3>Address</h3>
                    <div>
                      <span className={style.text}>236 5th SE Avenue, New York NY10000, United States</span>
                    </div>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className={style.icon}>
                    <FaPhoneAlt />
                  </div>
                  <div className={style.contact2}>
                    <h3>Phone</h3>
                    <div className='d-flex flex-column gap-1'>
                      <span className={style.text}>Mobile: +(84) 546-6789</span>
                      <span className={style.text}>Hotline: +(84) 456-6789</span>
                    </div>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <div className={style.icon}>
                    <MdAccessTimeFilled />
                  </div>
                  <div className={style.contact2}>
                    <h3>Working Time</h3>
                    <div className='d-flex flex-column gap-1'>
                      <span className={style.text}>Monday-Friday: 9:00 - 22:00</span>
                      <span className={style.text}>Saturday-Sunday: 9:00 - 21:00</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            <motion.div
              className="col-md-7 col-12"
              initial={{ x: 200 }}  // البداية من اليمين
              animate={{ x: 0 }}    // النهاية في المكان الأصلي
              transition={{ duration: 1.5 }}
            >
              <div className='p-5'>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                  </Form.Group>
                </Form>
                <button className={style.submitf} type='submit'> Submit </button>
              </div>
            </motion.div>

          </Row>

        </Container>


      </div>

      <SectionFooter />

    </div>
  )
}
