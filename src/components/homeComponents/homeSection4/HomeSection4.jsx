import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './section3.module.css';
import image1 from '../../../assets/images/home/section3/Rectangle10.png';
import image2 from '../../../assets/images/home/section3/Rectangle11.png';
import image3 from '../../../assets/images/home/section3/Rectangle12.png';

export default function HomeSection4() {
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <Container className='p-5'>
      <div className={`${style.contant}`}>
        <Row className='p-5'>
          <Col md={5}>
            <div className='pt-2 pb-4'>
              <div className={`${style.contant2} d-flex flex-column gap-1`}>
                <h1>50+ Beautiful rooms inspiration</h1>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <Link>Explore More</Link>
              </div>
            </div>
          </Col>

          <Col md={5}  >
            <div className='d-flex flex-sm-column flex-md-column flex-lg-row pt-3 gap-3 justify-content-start'>
              {/* الصور مع الحركة */}
              {[image1, image2, image3].map((img, idx) => (
                <motion.div
                  key={idx}
                  className={`${style.hideOnSmall} ps-2`}
                  animate={floatAnimation} // تطبيق حركة الطلوع والنزول
                  whileHover={{ scale: 1.05 }} // تكبير عند الهوفر
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={img}
                    width="220px"
                    height={idx === 0 ? '350px' : '290px'} // أول صورة أطول
                    alt={`bg-pic-${idx}`}
                  />
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
