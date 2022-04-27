import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  //from submit
  const handleRegister = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    alert(password);
  }
  return (
    <div className='container mt-5 mb-5'>
      <div className="card mx-auto w-50 p-4 shadow">
          <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} name='name' type="text" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check  name='terms' id='terms' type="checkbox" label="Accept Terms and Condition" />
                  </Form.Group>

                  <p>Already have an account? <Link to='/login' className='loginbtn'>Login</Link></p>
                  <button className='btn btn-primary'>Registration</button>

          </Form>
      </div>
    </div>
  );
};

export default Registration;