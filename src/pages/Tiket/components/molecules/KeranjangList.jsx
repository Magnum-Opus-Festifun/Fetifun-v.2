import PropTypes from 'prop-types';
import { TrashFill } from 'react-bootstrap-icons'
function KeranjangList(props) {
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
            <button className="buy-button">Beli sekarang</button>
            <TrashFill size={24} color='#3F475A' />
          </div>
  
        </div>
      </>
    );
  }
  
  KeranjangList.propTypes = {
    PosterAcara: PropTypes.string.isRequired,
    NamaAcara: PropTypes.string.isRequired,
    TanggalAcara: PropTypes.string.isRequired,
    WaktuAcara: PropTypes.string.isRequired,
    LokasiAcara: PropTypes.string.isRequired,
  };

export default KeranjangList