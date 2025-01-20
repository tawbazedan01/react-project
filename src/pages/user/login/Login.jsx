import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './login.module.css';


export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Enter your email" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Enter your password" />
          </FloatingLabel>

          <Button variant="primary" className="w-100">
            LogIn
          </Button>
        </Form>
      </div>
    </div>
  );
}
