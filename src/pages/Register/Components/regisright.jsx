import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Person, LockFill, Envelope } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Regisright() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
  });
  const [registrationStatus, setRegistrationStatus] = useState({
    isSuccess: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Memeriksa apakah role sudah dipilih
    if (!formData.role) {
      setRegistrationStatus({
        isSuccess: false,
        message: 'Harap pilih peran (role) sebelum mendaftar.',
      });
      return;
    }
  
    try {
      // Kirim data formulir ke API
      const response = await axios.post('http://localhost:4000/users', formData);
  
      // Proses respons dari API
      setRegistrationStatus({
        isSuccess: true,
        message: 'Registrasi berhasil! Silakan login.',
      });
    } catch (error) {
      if (error.response?.status === 409) {
        // Konflik: email sudah terdaftar
        setRegistrationStatus({
          isSuccess: false,
          message: 'Email sudah terdaftar. Gunakan email lain.',
        });
      } else {
        // Tangani kesalahan lain
        const errorMessage = error.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi.';
        setRegistrationStatus({
          isSuccess: false,
          message: errorMessage,
        });
      }
    }
  };
  
  

  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/d3f45d3e38e2ff56a54fe071a65802c96fffaaab/aset/logo%20biru.png"
        height="50"
        style={{ marginLeft: "30%", marginTop: "5%", marginBottom: "5%" }}
        alt="Navbar Logo"
      />
      <Form style={{ width: "80%", marginLeft: "5%", marginTop: "5%" }} onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label><Person />Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nama Lengkap"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Label>Role</Form.Label>
          <Form.Select
            aria-label="Select role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="" disabled>Pilih Role</option>
            <option value="user">User</option>
            <option value="eo">EO (Event Organizer)</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><Envelope />Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email/Username"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><LockFill />Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

       
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            Register
          </Button>
        </div>

        {registrationStatus.isSuccess !== null && (
          <Alert variant={registrationStatus.isSuccess ? 'success' : 'danger'} className="mt-3">
            {registrationStatus.message}
          </Alert>
        )}
        <br />
        <p>Sudah punya akun? <Link to='/login'>Login</Link></p>
   
      </Form>
    </div>
  );
}

export default Regisright;
