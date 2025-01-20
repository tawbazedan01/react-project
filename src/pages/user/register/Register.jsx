import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import styles from './register.module.css';

export default function Register() {
  const {register} = useForm();
  return (
    <>
      <div className={styles.registerContainer}>
      <Form className={styles.registerForm}>
        <FloatingLabel controlId="floatingInput" label="UserName" className="mb-3">
          <Form.Control type="text" placeholder="" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
          <Form.Control type="password" placeholder="" />
        </FloatingLabel>

        <Button variant="primary" className="w-100">Register</Button>
      </Form>
    </div>
    </>
  
  );
}
