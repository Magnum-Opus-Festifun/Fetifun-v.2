// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bookmark } from 'react-bootstrap-icons';
import './main.scss';


function DeskripsiEvent() {
  return (
    <div className="container">
      <h1 className=" text-center my-3 event-title">AMIKOM FEST 2023 - KONSER MUSIK</h1>
      <div className="row">
        <div className="col-6">
          <div className="container">
          <img src="https://iamedia.objects-us-east-1.dream.io/iamedia/311139374_185054997393250_6306058030952920815_n.jfif" className="img-fluid poster" alt="" />
          </div>
        </div>
        <div className="col-6 position-relative deskripsi">
          <h3 className="mt-3">Deskripsi</h3>
          <table className="w-100 mb-5">
              <tr>
                <td>Penyelenggara</td>
                <td>:</td>
                <td>BEM AMIKOM YK</td>
              </tr>
              <tr>
                <td>Tanggal</td>
                <td>:</td>
                <td>Jumat, 15 November 2023</td>
              </tr>
              <tr>
                <td>Waktu</td>
                <td>:</td>
                <td>14:00 - 23:59</td>
              </tr>
              <tr>
                <td>Lokasi</td>
                <td>:</td>
                <td>Stadion Mandala Krida, Yogyakarta</td>
              </tr>
              <tr>
                <td>Harga</td>
                <td>:</td>
                <td>Rp 55.000</td>
              </tr>
          </table>
          <p>Kabar gembira untuk kita semua... <br/>Fellas untuk line up sudah kita spill nih, tiket sudah bisa dipesan mulai dari sekarang!!
          <br/><br />TERBUKA UNTUK UMUM GUYS!</p>
          <div className="d-flex flex-row position-absolute bottom-0 start-0">
            <button type="button" className="btn btn-primary btn-profil me-2">Lihat Profil</button>
            <button type="button" className="btn btn-primary btn-beli me-2">Beli Sekarang</button>
            <Bookmark size={35} color="#1250A2"/>
          </div>
        </div>
      </div>
      <h2 className="mt-5">Rekomendasi Lainnya</h2>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <div className="card m-2">
            <img src="https://infogresik.id/wp-content/uploads/2022/11/Konser-denny-caknan-di-wisata-setigi-gresik.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ambyar Party 2022</h5>
              <p className="card-text text-primary">Rp 75.000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card m-2">
            <img src="https://infogresik.id/wp-content/uploads/2022/11/Konser-denny-caknan-di-wisata-setigi-gresik.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ambyar Party 2022</h5>
              <p className="card-text text-primary">Rp 75.000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card m-2">
            <img src="https://infogresik.id/wp-content/uploads/2022/11/Konser-denny-caknan-di-wisata-setigi-gresik.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ambyar Party 2022</h5>
              <p className="card-text text-primary">Rp 75.000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card m-2">
            <img src="https://infogresik.id/wp-content/uploads/2022/11/Konser-denny-caknan-di-wisata-setigi-gresik.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ambyar Party 2022</h5>
              <p className="card-text text-primary">Rp 75.000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card m-2">
            <img src="https://infogresik.id/wp-content/uploads/2022/11/Konser-denny-caknan-di-wisata-setigi-gresik.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ambyar Party 2022</h5>
              <p className="card-text text-primary">Rp 75.000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card m-2">
            <img src="https://infogresik.id/wp-content/uploads/2022/11/Konser-denny-caknan-di-wisata-setigi-gresik.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ambyar Party 2022</h5>
              <p className="card-text text-primary">Rp 75.000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card m-2">
            <img src="https://infogresik.id/wp-content/uploads/2022/11/Konser-denny-caknan-di-wisata-setigi-gresik.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ambyar Party 2022</h5>
              <p className="card-text text-primary">Rp 75.000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card m-2">
            <img src="https://infogresik.id/wp-content/uploads/2022/11/Konser-denny-caknan-di-wisata-setigi-gresik.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ambyar Party 2022</h5>
              <p className="card-text text-primary">Rp 75.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeskripsiEvent