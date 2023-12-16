// Lay.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Filter from './Filter';
import Content from './Content';
import './Lay.scss';

const Lay = () => {
  const categoriesData = [
    { id: 1, name: 'Uncoming Event', selected: false },
    { id: 2, name: 'Festival Fair', selected: false },
    { id: 3, name: 'Concerts', selected: false },
    { id: 4, name: 'Expo', selected: false },
    { id: 5, name: 'Workshops', selected: false },
  ];

  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const handleCategoryChange = (updatedCategories) => {
    setSelectedCategories(updatedCategories);
    console.log('Selected Categories:', updatedCategories);
  };

  const uncomingEventCardsData = [
    {
      imagePath: 'https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/main/aset/poster%20(12).png',
      title: 'Card 1',
      description: 'Description for Card 1',
      price: '$100',
    },
    {
      imagePath: 'https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/main/aset/poster%20(12).png',
      title: 'Card 2',
      description: 'Description for Card 2',
      price: '$100',
    },
     {
      imagePath: 'https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/main/aset/poster%20(12).png',
      title: 'Card 1',
      description: 'Description for Card 1',
      price: '$100',
    },
    {
      imagePath: 'https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/main/aset/poster%20(12).png',
      title: 'Card 2',
      description: 'Description for Card 2',
      price: '$100',
    },
  ];

  const festivalFairCardsData = [
    {
      imagePath: 'https://example.com/festival-fair-poster-1.png',
      title: 'Festival Fair 1',
      description: 'Description for Festival Fair 1',
      price: '$120',
    },
    {
      imagePath: 'https://example.com/festival-fair-poster-2.png',
      title: 'Festival Fair 2',
      description: 'Description for Festival Fair 2',
      price: '$90',
    },
     {
      imagePath: 'https://example.com/festival-fair-poster-1.png',
      title: 'Festival Fair 1',
      description: 'Description for Festival Fair 1',
      price: '$120',
    },
    {
      imagePath: 'https://example.com/festival-fair-poster-2.png',
      title: 'Festival Fair 2',
      description: 'Description for Festival Fair 2',
      price: '$90',
    },
    
    
  ];

  const concertCardsData = [
  {
    imagePath: 'https://example.com/concert-poster-1.png',
    title: 'Concert 1',
    description: 'Description for Concert 1',
    price: '$150',
  },
  {
    imagePath: 'https://example.com/concert-poster-2.png',
    title: 'Concert 2',
    description: 'Description for Concert 2',
    price: '$120',
  },
    {
    imagePath: 'https://example.com/concert-poster-1.png',
    title: 'Concert 1',
    description: 'Description for Concert 1',
    price: '$150',
  },
  {
    imagePath: 'https://example.com/concert-poster-2.png',
    title: 'Concert 2',
    description: 'Description for Concert 2',
    price: '$120',
  },
  // Add more data as needed
];

const expoCardsData = [
  {
    imagePath: 'https://example.com/expo-poster-1.png',
    title: 'Expo 1',
    description: 'Description for Expo 1',
    price: '$80',
  },
  {
    imagePath: 'https://example.com/expo-poster-2.png',
    title: 'Expo 2',
    description: 'Description for Expo 2',
    price: '$90',
  },
    {
    imagePath: 'https://example.com/expo-poster-1.png',
    title: 'Expo 1',
    description: 'Description for Expo 1',
    price: '$80',
  },
  {
    imagePath: 'https://example.com/expo-poster-2.png',
    title: 'Expo 2',
    description: 'Description for Expo 2',
    price: '$90',
  },
  // Add more da
];

const workshopCardsData = [
  {
    imagePath: 'https://example.com/workshop-poster-1.png',
    title: 'Workshop 1',
    description: 'Description for Workshop 1',
    price: '$60',
  },
  {
    imagePath: 'https://example.com/workshop-poster-2.png',
    title: 'Workshop 2',
    description: 'Description for Workshop 2',
    price: '$70',
  },
  {
    imagePath: 'https://example.com/workshop-poster-1.png',
    title: 'Workshop 1',
    description: 'Description for Workshop 1',
    price: '$60',
  },
  {
    imagePath: 'https://example.com/workshop-poster-2.png',
    title: 'Workshop 2',
    description: 'Description for Workshop 2',
    price: '$70',
  },
  // Add more data as needed
];
  
  return (
    <div className="lay-container">
      <Container>
        <Row>
          <Col sm={3} className="sidebar">
            <h1>Event List</h1>
            <Filter categories={categoriesData} handleCategoryChange={handleCategoryChange} />
          </Col>
          <Col sm={9} className="main-content">
            {((selectedCategories.length === 0 || selectedCategories.includes(1)) && uncomingEventCardsData.length > 0) && (
              <div className="event-section">
                <h1>Uncoming Event Mendatang</h1>
                <div className="event-cards">
                  {uncomingEventCardsData.map((eventCard, index) => (
                    <Content key={index} {...eventCard} />
                  ))}
                </div>
                <hr />
              </div>
            )}

            {((selectedCategories.length === 0 || selectedCategories.includes(2)) && festivalFairCardsData.length > 0) && (
              <div className="event-section">
                <h1>Festival Fair Mendatang</h1>
                <div className="event-cards">
                  {festivalFairCardsData.map((festivalFairCard, index) => (
                    <Content key={index} {...festivalFairCard} />
                  ))}
                </div>
                <hr />
              </div>
            )}
{((selectedCategories.length === 0 || selectedCategories.includes(3)) && concertCardsData.length > 0) && (
  <div className="event-section">
    <h1>Konser Mendatang</h1>
    <div className="event-cards">
      {concertCardsData.map((concertCard, index) => (
        <Content key={index} {...concertCard} />
      ))}
    </div>
    <hr />
  </div>
)}

{((selectedCategories.length === 0 || selectedCategories.includes(4)) && expoCardsData.length > 0) && (
  <div className="event-section">
    <h1>Expo Mendatang</h1>
    <div className="event-cards">
      {expoCardsData.map((expoCard, index) => (
        <Content key={index} {...expoCard} />
      ))}
    </div>
    <hr />
  </div>
)}

{((selectedCategories.length === 0 || selectedCategories.includes(5)) && workshopCardsData.length > 0) && (
  <div className="event-section">
    <h1>Workshops Mendatang</h1>
    <div className="event-cards">
      {workshopCardsData.map((workshopCard, index) => (
        <Content key={index} {...workshopCard} />
      ))}
    </div>
    <hr />
  </div>
)}

          </Col>
        </Row>
      </Container>

      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#007BFF', width: 'fit-content', borderRadius: '10px', margin: 'auto' }}>
        <Button variant="primary" href="#">
          Selengkapnya
        </Button>
      </div>
    </div>
  );
};

export default Lay;
