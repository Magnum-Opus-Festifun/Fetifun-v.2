
import { Carousel } from 'react-bootstrap';

import { C1, C2, C3 } from '../../assets/main';
const CarouselComponent = () => {
  return (
    <div>
    <Carousel className='carousel-container'>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={C1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Summer 2023</h3>
          <p>Music Festival</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={C2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Pesta Rakyat Simpedes</h3>
          <p>Saksikanlah band favorit kalian!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={C3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Prambanan Music Senja</h3>
          <p>Prambanan Music Senja - "Love In Jogja"</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
