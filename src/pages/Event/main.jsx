// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { amikom, ClosingCeremony, FBudaya } from '../../assets/main';
import CarouselComponent from '../../components/molecules/Carousel';
import CardComponent from '../../components/molecules/Card';
import ListCategoryEvent from './components/molecules/ListCategoryEvent';
import PaymentPage from './Payment';
import { Button } from 'react-bootstrap';

// Mendefinisikan beberapa array kartu untuk setiap kategori
const cardData1 = [
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
  { title: "FESTIVAL LERENG BUDAYA MERAPAI", image: FBudaya, price: '70.000' },
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
 
];

const cardData2 = [
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER VP", image: amikom, price: '740.000' },
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
];

const cardData3 = [
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER VP", image: amikom, price: '70.000' },
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
  
];

const cardData4 = [
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER VP", image: amikom, price: '70.000' },{ title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
  
];

const cardData5 = [
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER", image: amikom, price: '50.000' },
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER VP", image: amikom, price: '70.000' },
  { title: "AMIKOM FEST 2023 BE YOUNG FOREVER VP", image: amikom, price: '70.000' },
];

const categoryTitles = ["Upcoming Events", "Festival Fair", "Konser", "Exhibition Expo", "Workshop"];

// Komponen utama
function Event() {
  const [selectedCard, setSelectedCard] = useState(null);

  // Fungsi untuk menangani klik pada kartu
  const handleCardClick = (title, image, price) => {
    setSelectedCard({ title, image, price });
  };

  return (
    <div className='container'>
      {/* Komponen lainnya */}
      <CarouselComponent />
      <div className="input-pencarian">
        <input type="text" className="form-control" placeholder="Cari event kamu disini!" aria-label="Cari event kamu disini!" aria-describedby="button-addon2" />
        <Button style={{background:'#1250A2'}}>Cari</Button>
      </div>

      <ListCategoryEvent />
 {/* judul Konser Musik */}
      <div className=''>
        <h2 className='hsl-src'>Konser Musik</h2>
        <hr />
      </div>


      {/* pembungkus konten */}
      <div className='bungkus'>
        {/* control filter */}
        <div className='container-filter'>
          <div className='filter1'>
            <h5 className=''>Semua Waktu</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">Weekdays</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">Weekend</label>
            </div>
          </div>
          <div className='filter2'>
            <h5 className=''>Harga</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">0 - 100 rb</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">100 - 250 rb</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">250 - 500 rb</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">500 rb - 2 jt</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">2 jt - 5 jt</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">+ 5 jt</label>
            </div>
          </div>
        </div>

        {/* Menampilkan setiap kategori dan kartu-kartunya di sisi kanan */}
        <div className='col-md-9'>
          {[cardData1, cardData2, cardData3, cardData4, cardData5].map((cardData, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Menampilkan judul untuk setiap kategori */}
              <h2 className='hsl-src'>{categoryTitles[categoryIndex]}</h2>
              <hr />

              {cardData.length > 4 ? (
                <Slider dots infinite speed={500}>
                  {cardData.map((card, cardIndex) => (
                    <div key={cardIndex} style={{ height: '100px' }}>
                      {/* Komponen kartu */}
                      <CardComponent
                        image={card.image}
                        title={card.title}
                        price={card.price}
                        sourceLink="https://sumber-gambar.com"
                        onClick={() => handleCardClick(card.title, card.image, card.price)}
                      />
                      <hr/>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="row">
                  {cardData.map((card, cardIndex) => (
                    <div className="col-sm-4 h-10" key={cardIndex}>
                      {/* Komponen kartu */}
                      <CardComponent className="h-10"
                        image={card.image}
                        title={card.title}
                        price={card.price}
                        sourceLink="https://sumber-gambar.com"
                        onClick={() => handleCardClick(card.title, card.image, card.price)}
                      />
                      <br />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Menampilkan halaman pembayaran jika ada kartu yang dipilih */}
      {selectedCard && (
        <PaymentPage
          title={selectedCard.title}
          image={selectedCard.image}
          price={selectedCard.price}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
}

export default Event;
