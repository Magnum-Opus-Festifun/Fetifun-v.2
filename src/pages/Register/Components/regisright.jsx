import { Link } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import { Person, LockFill, Google, Facebook, Apple, Telephone, Envelope } from "react-bootstrap-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Regisright() {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/d3f45d3e38e2ff56a54fe071a65802c96fffaaab/aset/logo%20biru.png"
        height="50"
        style={{ marginLeft: "30%", marginTop: "5%", marginBottom: "5%" }}
        alt="Navbar Logo"
      />
      <Form style={{ width: "80%", marginLeft: "5%", marginTop: "5%" }}>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label><Person />Nama</Form.Label>
          <Form.Control type="text" placeholder="Nama Lengkap" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Label>Role</Form.Label>
          <Form.Select aria-label="Select role" defaultValue="">
            <option value="" disabled>Pilih Role</option>
            <option value="user">User</option>
            <option value="eo">EO (Event Organizer)</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><Envelope />Email</Form.Label>
          <Form.Control type="email" placeholder="Email/Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><LockFill />Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            Register
          </Button>
        </div>
        <p>Sudah punya akun? <Link to='/login'>Login</Link></p>
        <div className="mt-3">
          <p>Atau lanjutkan melalui:</p>
          <div className="ms-5 mt-2" >
            <Row className="ms-2">
              <Col><Button variant="primary"><Google size={35} /></Button>{' '}  </Col>
              <Col><Button variant="primary"><Facebook size={35} /></Button>{' '}</Col>
              <Col><Button variant="primary"><Apple size={35} /></Button>{' '}</Col>
            </Row>


          </div>
        </div>
      </Form>
    </div>

  );
}

export default Regisright;