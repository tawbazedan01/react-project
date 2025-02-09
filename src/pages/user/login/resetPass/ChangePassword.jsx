import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import CustomButton from '../../../assets/hooks/customButton/CustomButton.jsx';
import logo2 from '../../../../assets/images/logo-img/House_Logos.png';
import style from './resetPassword.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';  // إضافة ToastContainer

// تأكد من أنك قمت بإضافة مكتبة react-toastify في مشروعك
// npm install react-toastify

export default function ChangePassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const changePassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${import.meta.env.VITE_BURL}/auth/forgotPassword`, 
                {
                    email: email,
                    password: password,
                    code: code,
                }
            );

            if (response.status === 200) {
                toast.success('Your password has been changed successfully.'); // رسالة نجاح
                navigate('/auth/login');
            } else {
                toast.error('Failed to confirm your new password'); // رسالة فشل
            }

            console.log(response);

        } catch (error) {
            console.log("error", error);
            toast.error('Something went wrong. Please try again.'); // رسالة خطأ عند فشل الطلب
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
                                Set your new password.
                            </p>

                            <Form onSubmit={changePassword}>  {/* إضافة onSubmit هنا */}
                                <FloatingLabel controlId="floatingInput" label="Enter Your Email" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        placeholder=""
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Enter Your New Password" className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder=""
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Enter Your Code" className="mb-3">
                                    <Form.Control
                                        type="code"
                                        placeholder=""
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        required
                                    />
                                </FloatingLabel>

                                <CustomButton type="submit" text="Confirm Your Password" />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <ToastContainer />
        </div>
    );
}
