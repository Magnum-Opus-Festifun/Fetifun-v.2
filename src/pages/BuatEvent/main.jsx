// eslint-disable-next-line no-unused-vars
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from './components/fileupload';
import Description from './components/deskripsi';
import "./style.scss";
import CreateTicket from './components/buattiket';
import { Button } from 'react-bootstrap';

function BuatEvent() {
  return (
      <div className='container'>
        <div className="row">
          <div className="col-sm-5">
            <FileUpload />
          </div>
          <div className="col-sm-7">
            <div className="mb-3">
              <label htmlFor="eventname" className="form-label">Nama Event</label>
              <input type="text" className="form-control" id="eventname" placeholder="Masukkan nama event kamu" />
            </div>
            <div className="row h-auto">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="date-start" className="form-label">Tanggal Mulai</label>
                  <input type="date" className="form-control" id="date-start" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="date-end" className="form-label">Tanggal Selesai</label>
                  <input type="date" className="form-control" id="date-end" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Lokasi</label>
              <input type="text" className="form-control" id="location" placeholder="Masukkan lokasi event kamu" />
            </div>
            <div className='mb-3'>
              <label htmlFor="category" className="form-label">Jenis Event</label>
              <select className="form-select" aria-label="Default select example" id='category'>
                <option selected>Pilih Jenis Event</option>
                <option value={1}>Konser</option>
                <option value={2}>Webinar</option>
                <option value={3}>Workshop</option>
              </select>
            </div>
          </div>
        </div>
        <div>
        <Description />
        </div>
        <p className='form-label mt-5'>Tiket</p>
        <CreateTicket/>
        <div className='d-flex justify-content-end gap-3 my-5'>
          <Button variant="danger">Batalkan</Button>
          <Button style={{background:'#1250A2'}}>Selesai & Upload</Button>
          </div>
      </div>
  )
}

export default BuatEvent