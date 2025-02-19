import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './homeHeader.module.css';

export default function HomeHeader() {
  return (
    <div className={`${style.homeBg}`}>
      <Container>
        <Row>
          <Col md={5} className='ms-auto'>
            <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`${style.contant} mt-5 me-5 p-5 d-flex flex-column gap-2`}>
                <span>New Arrival</span>
                <h1>Discover Our New Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <Link to='/products'>BUY Now</Link>
              </div>
            </motion.div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
