import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../assets/images/Bemamikom.jpg";

export class Head extends Component {
  render() {
    return (
      <div className='container mb-5'>
        <div className='d-flex flex-row'>
            <img className='logoEO img-fluid rounded-circle' src={logo} alt="Logo"/>
            <div className='detail ms-4'>
                <h2 className='nameEO'>BEM AMIKOM</h2>
                <p className='subjek'>BEM-KM AMIKOM YOGYAKARTA 2023</p>
                <p className='desc'>Presma : @donydharma_p <br /> Wapresma : @walesasiyogi</p>
                <div className="sosmed mt-4">
                    <img src="https://i0.wp.com/tbrsteakhouse.com/wp-content/uploads/2018/11/instagram-colourful-icon.png?ssl=1" className='me-2' alt="" width='60'/>
                    <img src="https://seeklogo.com/images/T/twitter-x-logo-19D2657BAA-seeklogo.com.png?v=638258862870000000" className='me-2' alt="" width='60'/>
                    <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" className='me-2' alt="" width='65'/>
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-logo-black-circle-png.png" className='me-2' alt="" width='60'/>
                    <img src="https://www.marmara.id/wp-content/uploads/2022/08/chat-via-wa.png" className='me-2' alt="" height='60'/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Head;