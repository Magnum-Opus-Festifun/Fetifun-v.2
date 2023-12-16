import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../../assets/images/tigabelaspro.jpg";
import "./style.scss";

export class Profil extends Component {
  render() {
    return (
      <div className='container mb-5'>
        <div className='d-flex flex-row'>
            <img className='logoEO img-fluid rounded-circle' src={logo} alt="Logo"/>
            <div className='detail ms-4'>
                <h2 className='nameEO'>tigabelaspro</h2>
                <p className='subjek'>Tigabelas Pro - Event Organizer Yogyakarta</p>
                <p className='desc'>Event Organizer • Manpower Management • Event Production more info ⬇️</p>
                <div className="tombol mt-4">
                    <button type="button" className="btn btn-outline-secondary btnProfile">Edit Profil</button>
                    <button type="button" className="btn btn-outline-secondary mx-3 btnProfile">Buat Event</button>
                    <button type="button" className="btn btn-outline-secondary btnProfile">Lihat Statistik</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Profil