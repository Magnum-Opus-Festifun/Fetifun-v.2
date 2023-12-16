
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { TicketFill, CartFill } from 'react-bootstrap-icons';
import Keranjang from '../Keranjang';
import Tiketku from '../Tiketku';
function OpsiTiket() {


  const [activeSection, setActiveSection] = useState('keranjang'); // Set initial active section

  return (
    <div>
    <div className="tiketku-container">
      <div className={`nav-item ${activeSection === 'keranjang' ? 'active' : ''}`} onClick={() => setActiveSection('keranjang')}>
      <CartFill size={24} color='#3F475A'/>
        <div className="text">Keranjang</div>
      </div>
      <div className={`nav-item ${activeSection === 'tiket' ? 'active' : ''}`} onClick={() => setActiveSection('tiket')}>
      <TicketFill size={24} color='#3F475A'/>
        <div className="text">Tiketku</div>
      </div>

      {/* Conditional rendering based on activeSection */}
      
    </div>
    <div className='active-section'>
      {activeSection === 'keranjang' && <Keranjang />}
      {activeSection === 'tiket' && <Tiketku />}
      </div>
    </div>
  )
}

export default OpsiTiket