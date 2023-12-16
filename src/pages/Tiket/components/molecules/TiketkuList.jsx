
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function TiketkuList(props) {
  return (
    <>
      <div className="keranjang-container">
        <div className="thumbnail-container">
        <img className="event-thumbnail" src={props.PosterAcara} alt="Event Thumbnail" />
        </div>
        <div className="info-container">
          <div className="info-section">
            <div className="event-info">
            <div className="namaAcara-container">
                  <div className="info-label">Nama Acara</div>
                  <div className="info-value">{props.NamaAcara}</div>
                </div>
            </div>
            <div className="event-info">
            <div className="info-label">Tanggal</div>
                <div className="info-value">{props.TanggalAcara}</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="info-section">
            <div className="event-info">
            <div className="info-label">Waktu Acara</div>
              <div className="info-value">{props.WaktuAcara}</div>
            </div>
            <div className="event-info">
            <div className="info-label">Lokasi</div>
              <div className="info-value">{props.LokasiAcara}</div>
            </div>
          </div>
        </div>
        <div className="button-container">
        <Link to="/unduh">
          <button className="buy-button">Uduh Sekarang</button>
        </Link>
        </div>
      </div>
    </>
  )
}
TiketkuList.propTypes = {
  PosterAcara: PropTypes.string.isRequired,
  NamaAcara: PropTypes.string.isRequired,
  TanggalAcara: PropTypes.string.isRequired,
  WaktuAcara: PropTypes.string.isRequired,
  LokasiAcara: PropTypes.string.isRequired,
};
export default TiketkuList