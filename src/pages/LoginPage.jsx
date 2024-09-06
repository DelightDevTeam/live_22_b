import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../hooks/baseURL';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const [eye, setEye] = useState(false);
  const [password, setPassword] = useState('');
  const [user_name, setName] = useState('');
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = localStorage.getItem('token');
  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  const handleEye = () => {
    setEye(!eye);
  };

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg(''); // Reset error message before starting the request

    const loginData = {
      user_name: user_name,
      password: password,
    };

    fetch(BASE_URL + '/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(async (response) => {
        const responseData = await response.json();
        if (!response.ok) {
          setLoading(false);
          setErrMsg(
            `Login failed: ${response.status} ${response.statusText} - ${
              responseData.message || 'Unknown error'
            }`
          );
          throw new Error(
            `Login failed: ${response.status} ${response.statusText}`
          );
        }
        return responseData;
      })
      .then((data) => {
        setLoading(false);
        if (data.data && data.data.token) {
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('ads', 'on');
          navigate('/');
        } else {
          throw new Error('Token not found in response');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div className='pt-4 pb-5'>
      <div className='customForm rounded-4 p-4 pb-5 mb-5'>
        <div className='text-center'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <h3 className='gradient-text mb-4 fw-bold text-center'>
          Welcome to Delight Live 22
        </h3>

        {errMsg && (
          <div className='alert alert-danger' role='alert'>
            {errMsg}
          </div>
        )}

        <Form onSubmit={login}>
          <Form.Group className='mb-2' controlId='formBasicEmail'>
            <Form.Label className='fw-semibold'>Login Name</Form.Label>
            <Form.Control
              className='rounded-5 p-2'
              type='text'
              placeholder='Enter Name'
              value={user_name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label className='fw-semibold'>Password</Form.Label>
            <Form.Control
              className='rounded-5 p-2'
              type={eye ? 'text' : 'password'}
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </Form.Group>

          <button
            type='submit'
            className='bg-gradient rounded-4 py-2 fw-semibold px-5 w-100 text-center'
            disabled={loading}
          >
            <h5 className='m-0 py-1'>{loading ? 'Logging in...' : 'Login'}</h5>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

// const LoginPage = () => {
//   return (
//     <div className="pt-4 pb-5 ">
//       <div className='customForm rounded-4 p-4 pb-5 mb-5'>
//       <div className="text-center">
//       <img src={logo} className='logo' />
//       </div>
//       <h3 className="gradient-text mb-4 fw-bold text-center">Welcome to M9</h3>
//       <Form>
//       <Form.Group className="mb-2" controlId="formBasicEmail">
//         <Form.Label className=' fw-semibold'>Login Name</Form.Label>
//         <Form.Control className='rounded-5 p-2' type="text" placeholder="Enter Name" />
//        </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label className=' fw-semibold'>Password</Form.Label>
//         <Form.Control className='rounded-5 p-2' type="password" placeholder="Enter Password" />
//        </Form.Group>
//     </Form>
//       <button className="bg-gradient rounded-4 py-2 fw-semibold px-5 w-full text-center">
//         <h5 className='m-0  py-1'>Login</h5>
//       </button>
//     </div>
//     </div>
//   )
// }

// export default LoginPage
