import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from "react-toastify";
import styles from './login.module.css';


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
        navigate('/')
      }
      console.log(response)
    } catch (error) {
      setServerError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
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

          <Button type="submit" variant="primary" className="w-100"
            disabled={isLoading}>
            {isLoading ? "Loading..." : "LogIn"}
          </Button>
        </Form>
      </div>
    </div>
  );
}
