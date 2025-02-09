import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import CustomButton from '../../../assets/hooks/customButton/CustomButton.jsx';
import logo2 from '../../../../assets/images/logo-img/House_Logos.png';
import style from './resetPassword.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';  // استيراد ToastContainer و toast
import 'react-toastify/dist/ReactToastify.css';  // استيراد الأنماط الخاصة بالتوست

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${import.meta.env.VITE_BURL}/auth/sendcode`, {
        email: email,
      });

      // تأكد من أن الرد من السيرفر كان ناجحاً
      if (response.status === 200) {
        toast.success('A link has been sent to your email.');
        navigate('/auth/changePassword');

      } else {
        toast.error('Failed to send reset link. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send reset link. Please try again.');  // عرض رسالة خطأ إذا فشل الطلب
    }
  };

  return (
    <div>
      <div className={`d-flex flex-column ${style.bgImage1}`}>
        <img src={logo2} alt="logo" />
        <h2 className={style.overlayText1}>Lost password!</h2>
      </div>
      <Container>
        <Row className="pt-5 pb-5">
          <Col md={7}>
            <div>
              <p className="w-50">
                Lost your password? Please enter your email address. You will receive a link to create a new password via email.
              </p>

              <Form onSubmit={resetPassword}>
                <FloatingLabel controlId="floatingInput" label="Enter Your Email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>

                <CustomButton type="submit" text="Reset Password" />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <ToastContainer />
    </div>
  );
}
