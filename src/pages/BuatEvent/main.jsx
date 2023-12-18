// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from './components/fileupload';
import Description from './components/deskripsi';
import { Button } from 'react-bootstrap';

function BuatEvent() {
  const [eventData, setEventData] = useState({
    name: '',
    dateStart: '',
    dateEnd: '',
    location: '',
    categoryIDs: [],  // Perhatikan perubahan di sini
    description: '',
    ticketPrice: '',
    ticketStock: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCategoryChange = (e) => {
    const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value);
    setEventData((prevData) => ({ ...prevData, categoryIDs: selectedCategories }));
  };

  const handleDescriptionChange = (value) => {
    setEventData((prevData) => ({ ...prevData, description: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim permintaan ke server menggunakan Axios
      const response = await axios.post('http://localhost:4000/events', eventData);
      
      // Tampilkan respons dari server
      console.log(response.data);

      // Reset form setelah berhasil membuat event
      setEventData({
        name: '',
        dateStart: '',
        dateEnd: '',
        location: '',
        categoryIDs: [],
        description: '',
        ticketPrice: '',
        ticketStock: '',
      });
    } catch (error) {
      // Tangani kesalahan
      console.error('Error creating event:', error);
    }
  };


  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-5">
          <FileUpload />
        </div>
        <div className="col-sm-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="eventname" className="form-label">Nama Event</label>
              <input
                type="text"
                className="form-control"
                id="eventname"
                name="eventName"
                value={eventData.eventName}
                onChange={handleInputChange}
                placeholder="Masukkan nama event kamu"
              />
            </div>
            <div className="row h-auto">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="date-start" className="form-label">Tanggal Mulai</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date-start"
                    name="dateStart"
                    value={eventData.dateStart}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="date-end" className="form-label">Tanggal Selesai</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date-end"
                    name="dateEnd"
                    value={eventData.dateEnd}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Lokasi</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={eventData.location}
                onChange={handleInputChange}
                placeholder="Masukkan lokasi event kamu"
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="category" className="form-label">Jenis Event</label>
              <select
                className="form-select"
                aria-label="Default select example"
                id='category'
                name="category"
                value={eventData.category}
                onChange={handleCategoryChange}
              >
                <option value="" disabled>Pilih Jenis Event</option>
                <option value={1}>Festival</option>
                <option value={2}>Konser Musik</option>
                <option value={3}>pameran</option>
                <option value={4}>Lomba dan Kompetisi</option>
                <option value={5}>Segera hadir</option>
                <option value={6}>Rekomendasi</option>
              </select>
            </div>
            <div>
              <Description value={eventData.description} onChange={handleDescriptionChange} />

            </div> <br /> <br />
            <div className='container'>
              <div className="row border border-1 align-items-center my-3 py-2 d-flex">
                <div className="col-auto">
                  <label htmlFor="inputHarga" className="col-form-label text-secondary">Harga</label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="inputHarga"
                    className="form-control"
                    aria-describedby="hargaHelpInline"
                    name="ticketPrice"
                    value={eventData.ticketPrice}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="inputJumlah" className="col-form-label text-secondary">Jumlah Tiket</label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="inputJumlah"
                    className="form-control"
                    aria-describedby="jumlahHelpInline"
                    name="ticketStock"
                    value={eventData.ticketStock}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

            </div>
            <div className='d-flex justify-content-end gap-3 my-5'>
              <Button variant="danger">Batalkan</Button>
              <Button style={{ background: '#1250A2' }}>Selesai & Upload</Button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default BuatEvent;
