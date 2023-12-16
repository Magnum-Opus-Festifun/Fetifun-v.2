// eslint-disable-next-line no-unused-vars
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Tiketku.scss";
import Title from "../../components/atoms/Title";
import tiket from "../../assets/images/tiket.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../assets/images/Bemamikom.jpg"
import { Button } from "react-bootstrap";


function Tiketku() {
  return (
    <>
      <div className="container">
       <Title title='Tiket'/>
        <hr />
        <h4 className="text-dark-blue mt-5">Happy Asmara Music - BIMA KARUNIA FAJAR SYAHPUTRA</h4>
        <div className="row">
            <div className="col-sm-7">
                <div className="p-2" style={{background: '#10468E'}}>
                    <img src={tiket} alt="" className="img-fluid"/>
                </div>
                <div className="deskripsi my-4 p-2">
                    <div className="card-body">
                        <h2 className="text-dark-blue fw-bold">Deskripsi</h2>
                        <p>
                        Live Music Performance with: <br />
                        -Muak  <br />
                        -Bertaut <br />
                        <br />
                        Daftar Penyanyi : <br />
                        - Happy Asmara <br />
                        - Tiara Andini <br />
                        <br />
                        Syarat dan Ketentuan: <br />
                        - Dilarang membawa makanan dari luar <br />
                        - Dilarang membawa minuman dari luar <br />
                        - Dilarang Membawa benda terlarang
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-5">
                <div className="info p-5">
                    <h5 className="fw-bold">Happy Asmara Music</h5>
                    <li className="list">
                    <FaRegCalendarAlt color="#1250A2"/><span className="ms-2">24 Des - 25 Des 2024 </span>
                    </li>
                    <li className="list">
                    <IoIosTime color="#1250A2"/><span className="ms-2">15:00 - 22:00 WIB </span>
                    </li>
                    <li className="list">
                    <FaLocationDot color="#1250A2"/><span className="ms-2">Kota Yogyakarta, Daerah Istimewa Yogyakarta</span>
                    </li>
                    <hr />
                    <div className="d-flex mb-3">
                        <img src={logo} className="img-fluid rounded-circle me-3" width={50} alt="" />
                        <p className="text-secondary">Diselenggarakan oleh : <br />BEM AMIKOM YK </p>
                    </div>
                    <Button style={{background:'#1250A2', width:'100%'}}>Unduh Tiket</Button>
                </div>
            </div>
        </div>
      </div>
      
    </>
  );
}

export default Tiketku;
