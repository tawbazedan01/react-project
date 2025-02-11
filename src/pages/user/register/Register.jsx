import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './register.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from "react-toastify";
import CustomButton from '../../../assets/hooks/customButton/CustomButton.jsx';
import logo2 from '../../../assets/images/logo-img/House_Logos.png';


export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const registerUser = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`, value);
      if (response.status == 201) {
        toast.success('please check your email', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        navigate('/login');
      }
      console.log(response)
    } catch (error) {
      if (error.response.status == 409) {
        setServerError("email already in use");
      } else {
        setServerError("server error");
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className={`d-flex flex-column ${styles.bgImage1}`}>
        <img src={logo2} alt="logo" />
        <h2 className={styles.overlayText1}>Register</h2>
      </div>
      <div className={styles.registerContainer}>
        <Form onSubmit={handleSubmit(registerUser)} className={styles.registerForm}>
          {serverError ? <div className='text-danger'>{serverError}</div> : null}
          <h2 className='pb-3'> Register </h2>
          <FloatingLabel controlId="floatingInput" label="UserName" className="mb-3">
            <Form.Control type="text" placeholder=""
              {...register("userName", { required: "username is required" })} />
            {errors.userName ? <div className='text-danger'>{errors.userName.message}</div> : null}

          </FloatingLabel>

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

          <CustomButton disabled={isLoading} type="register" text={isLoading ? "Loading..." : "Register"} />


        </Form>
      </div>
    </>

  );
}
