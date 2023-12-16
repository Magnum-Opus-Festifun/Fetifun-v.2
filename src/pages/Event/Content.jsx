// Content.jsx
import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Content = ({ imagePath, title, description, price }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <Card style={{ width: '18rem', borderRadius: '20px' }}>
        <Card.Img variant="top" src={imagePath} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Text>
          <b style={{ marginLeft: '10px' }}>{price}</b>
        </Card.Text>
        {/* Open modal on button click */}
        <Button variant="primary" onClick={handleModalShow}>
          Beli Tiket
        </Button>
      </Card>

      {/* Modal for payment form */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" value={title} readOnly />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" value={price} readOnly />
            </Form.Group>
            {/* Add more form fields as needed */}
            <Button variant="primary" type="submit">
              Proceed to Payment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Content;
