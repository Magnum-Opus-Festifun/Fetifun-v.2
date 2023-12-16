import React from 'react';
import {Col, Row } from 'react-bootstrap';
import Regisleft from "./Components/regisleft";
import Regisright from './Components/regisright';

const Register = () => {
  return (
    <div className='regis-container'>
        <Row className="landing">
          <Col className="login-left"><Regisleft /></Col>
    
          <Col className="login-right"><Regisright /></Col>
        </Row>
    </div>
  );
};

export default Register;