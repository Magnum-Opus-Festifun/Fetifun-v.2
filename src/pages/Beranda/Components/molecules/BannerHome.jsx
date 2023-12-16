import { Link } from "react-router-dom"
import { bannerHome } from "../../../../assets/main"

function BannerHome() {
  return (
    <div className="bannerContainer">
      <div className="banner-container">
        <div className="banner-img">
          <img src= {bannerHome} alt="Image" />
        </div>
        <div className="banner-content">
          <h2>Daftarkan Event Anda</h2>
          <p>Jadikan Event Anda Tampak, Tertuju, dan Tergapai! Daftarkan Event Anda Sekarang!</p>
        </div>
        <div className="banner-button">
          <Link to="/buatevent"><button>Buat Event Kamu Disini!</button></Link>
          
        </div>
      </div>
      </div>
  
  )
}

export default BannerHome