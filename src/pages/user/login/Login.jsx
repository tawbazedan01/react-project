import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import CustomButton from '../../../assets/hooks/customButton/CustomButton.jsx';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';


export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const registerUser = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, value);
      if (response.status == 200) {
        localStorage.setItem("userToken", response.data.token);
        navigate('/home')
      }
      console.log(response)
    } catch (error) {
      setServerError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className={`d-flex flex-column ${styles.bgImage1}`}>
        <img src={logo2} alt="logo" />
        <h2 className={styles.overlayText1}>LogIn</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <Form onSubmit={handleSubmit(registerUser)} className={styles.registerForm}>
            {serverError ? <div className='text-danger'>{serverError}</div> : null}
            <h2 className='pb-3'> LogIn </h2>

            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control type="email" placeholder=""
                {...register("email", { required: "email is required" })} />
              {errors.email ? <div className='text-danger'>{errors.email.message}</div> : null}
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
              <Form.Control type="password" placeholder=""
                {...register("password", { required: "password is required" })} />
              {errors.password ? <div className='text-danger'>{errors.password.message}</div> : null}

            </FloatingLabel>
            <div className='d-flex flex-column gap-3 pb-3'>
              <Link to="/auth/register" style={{ color: '#B88E2F' }}>
                Don't Have an Account? </Link>
            </div>
            <div className='d-flex flex-column gap-3 pb-3'>
              <Link to="/auth/resetPassword" style={{ color: '#B88E2F' }}>
                Forget your password! </Link>
            </div>
            <CustomButton disabled={isLoading} type="login" text={isLoading ? "Loading..." : "LogIn"} />

          </Form>
        </div>
      </div>
    </>
  );
}
