// Import statements
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Envelope, LockFill } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Login component
function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState({
    isSuccess: null,
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate that email and password are not empty
    if (!loginData.email || !loginData.password) {
      setLoginStatus({
        isSuccess: false,
        message: 'Please fill in both email and password.',
      });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:4000/login', loginData);
  
      setLoginStatus({
        isSuccess: true,
        message: response.data.message,
      });
  
      // Redirect ke halaman sesuai peran
      const userRole = response.data.data.role;
      if (userRole === 'user') {
        navigate('/user-page');
      } else if (userRole === 'eo') {
        navigate('/eo-page');
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          setLoginStatus({
            isSuccess: false,
            message: 'Email atau password salah.',
          });
        } else if (status === 404) {
          setLoginStatus({
            isSuccess: false,
            message: 'Email belum terdaftar.',
          });
        } else {
          setLoginStatus({
            isSuccess: false,
            message: 'Terjadi kesalahan. Silakan coba lagi.',
          });
        }
      } else if (error.request) {
        setLoginStatus({
          isSuccess: false,
          message: 'Tidak ada respons dari server. Silakan coba lagi.',
        });
      } else {
        setLoginStatus({
          isSuccess: false,
          message: 'Terjadi kesalahan. Silakan coba lagi.',
        });
      }
    }
  };
  

  

  return (
    <>
      <img
        src="https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/d3f45d3e38e2ff56a54fe071a65802c96fffaaab/aset/logo%20biru.png"
        height="50"
        style={{ marginLeft: "30%", marginTop: "30%", marginBottom: "0%" }}
        alt="Navbar Logo"
      />
      <Form style={{ width: "80%", height: "100vh", marginLeft: "10%", marginTop: "10%" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><Envelope /> Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email/username"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><LockFill />Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            Login
          </Button>
        </div><br />
        
        {loginStatus.isSuccess !== null && (
          <Alert variant={loginStatus.isSuccess ? 'success' : 'danger'} className="mt-3">
            {loginStatus.message}
          </Alert>
        )}

        <p>Belum punya akun? <Link to='/register'>Register</Link></p>
        {/* <div className="mt-5">
          <p>Atau lanjutkan melalui:</p>
          <div className="ms-auto mt-5" >
           
          </div>
        </div> */}
      </Form>
    </>
  );
}

export default Login;
