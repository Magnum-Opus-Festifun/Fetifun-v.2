import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Beranda from "../Beranda/main";
import BuatEvent from "../BuatEvent/main";
import Event from "../Event/main";
import Tiket from "../Tiket/main";
import Unduh from "../Tiket/unduhtiket";
import Profile from "../Profile/main";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./mainApp.scss";
import Login from "../Login/main";
import Register from "../Register/main";
import PaymentPage from "../Event/Payment";
import Dasboard from "../Dasboard/Dasboard";
import DeskripsiEvent from "../Event/deskripsiEvent";
import PesanPage from "../Dasboard/pages/PesanPage";
import ProfilPage from "../Dasboard/pages/ProfilPage";
import PostinganPage from "../Dasboard/pages/PostinganPage";

function MainApp() {
    const navigate = useNavigate();

    // Fungsi untuk navigasi ke PesanPage
    const goToPesanPage = () => {
        navigate("/dasboard/pesan");
    };

    return (
        <div className="mainApp">
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/buatevent" element={<BuatEvent />} />
                    <Route path="/dasboard/*" element={<Dasboard />} />

                    <Route
                        path="/event"
                        element={
                            <Routes>
                                <Route path="/" element={<Event />} />
                                <Route
                                    path="/payment"
                                    element={<PaymentPage />}
                                />
                            </Routes>
                        }
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/tiketku" element={<Tiket />} />
                    <Route path="/unduh" element={<Unduh />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/deskripsi" element={<DeskripsiEvent />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default MainApp;
