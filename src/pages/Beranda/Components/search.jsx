
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../beranda.scss';
const SearchingComponent = () => {
  return (
    <Container className='search-container'>
      <Row className="align-items-center search-row">
        {/* Bagian Kiri */}
        <Col xs={5}>
          <div className='search-item'>
            <p>Cari Event</p>
            <Form.Control type="text" placeholder="Cari Even kamu disini" />
          </div>
        </Col>

        {/* Bagian Tengah */}
        <Col xs={5}>
          <div className='search-item'>
            <p>Jenis Event</p>
            <Form.Control as="select">
              <option value="selected">Pilih Jenis Event</option>
              <option value="option1">Budaya</option>
              <option value="option1">Budaya</option>
              <option value="option2">WorkShop</option>
              <option value="option3">Webinar</option>
              <option value="option4">Seminar</option>
              <option value="option5">Konser</option>
              <option value="option6">Pameran</option>
              <option value="option7">Kuliner</option>
            </Form.Control>
          </div>
        </Col>

        {/* Bagian Kanan */}
        <Col xs={1}>
          <div className="text-center search-item">
            <p>&nbsp;</p>
            <Button style={{background:'#1250A2'}} className='search-button'>Cari</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchingComponent;
