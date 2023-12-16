import React from 'react';
import { Modal, Button, Row, Container } from 'react-bootstrap';
import logo from "../../assets/images/Bemamikom.jpg";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bookmark } from 'react-bootstrap-icons';


function PaymentPage({ title, image, price, onClose }) {
  return (
    <Modal show={true} onHide={onClose} centered fullscreen>
      <Container>
      <Modal.Header closeButton>
        <h3 className='fw-bold'>Detail Event</h3>
        <hr style={{ boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)' }} />
      </Modal.Header>
      </Container>
      <Modal.Body>
        <Container>
          <div style={{  backgroundColor: 'rgb(113, 165, 208)' , padding: '50px', borderRadius: '8px', marginBottom: '15px', paddingBottom: '100px' }}>
          
          <h3 className='text-center fw-bold'>{title}</h3>
          <row className="d-flex profil align-items-center mb-2">
            <Link to={'/profile'} style={{textDecoration:'none', color:'black'}}><img src={logo} className='img-fluid rounded-circle me-2' width={50} /><span className='fw-bold'>BEM AMIKOM</span></Link>
          </row>
          <div style={{ display: 'flex'}}>
            <img
              src={image}
              alt={title}
              className="img-fluid me-5"
              style={{ borderRadius: '20px', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)' }}
            />
            <div>
                <table className="mb-5 fw-bold">
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
                    <td>Rp {price}</td>
                  </tr>
                </table>
            </div>
          </div>
        </div>
          <h4 className='fw-bold mt-5'>Detail Pemesanan</h4>
          <div>
            <div className='mb-5'>
              <div className='name mb-2'>
                <label className='text-secondary'>Nama</label>
                <h3 className=''>Joko Sijodo</h3>
              </div>
              <div className='gender mb-2'>
                <label className='text-secondary'>Jenis Kelamin</label>
                <h4 className=''>Laki - Laki</h4>
              </div>
              <div className='number mb-2'>
                <label className='text-secondary'>No. Telepon</label>
                <h4 className=''>+628918318374</h4>
              </div>
              <div className='name mb-2'>
                <label className='text-secondary'>Email</label>
                <h4 className=''>joko.sijodo@gmail.com</h4>
              </div>
            </div>
          </div>
        <div className="mt-5 d-flex justify-content-between">
          <h4 className='fw-bold'>Metode Pembayaran</h4>
          <h5 className="mt-3">Harga: {price}</h5>
        </div>
        <div className="text-center">
          <div className="d-flex justify-content-around align-items-center">
            <img src="data:image/png;base64,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" alt="UPI Payment" style={{ marginRight: '10px', width: '150px' }} />
            <div>
              <h5 className="text-start">UPI Payment</h5>
              <p className="text-start">Pembayaran dengan UPI Payment</p>
            </div>
            <p></p>
          </div>
          <hr />
          <div className="d-flex justify-content-around align-items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygimtYBI9Q1WDZje9SB3wS32a4GEUY4m8_A&usqp=CAU" alt="debit/credit Payment" style={{ marginRight: '10px', width: '150px' }} />
            <div>
              <h5 className="text-start">Debit/Credit Payment</h5>
              <p className="text-start">Dengan Debit/Credit Payment</p>
            </div>
            <p></p>
          </div>
          <hr />
          <div className="d-flex justify-content-around align-items-center">
            <img src="data:image/jpeg;base64,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" alt="Paylater" style={{ marginRight: '10px', width: '200px' }} />
            <div>
              <h5 className="text-start">Paylater</h5>
              <p className="text-start">Pembayaran dengan Paylater</p>
            </div>
            <p></p>
          </div>
          <hr />
          <div className="d-flex justify-content-around align-items-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAADm5ubu7u60tLTV1dWFhYWbm5toaGiSkpLIyMjb29vj4+P19fXExMSXl5e7u7thYWFQUFAuLi6qqqr5+fnNzc1ERETk5OSlpaW4uLiMjIw+Pj7r6+sPDw/X19d9fX0cHBw3NzcmJiZZWVlzc3OAgIAeHh4qKiozMzNjY2N3d3cUFBRJSUksb7V2AAAJ+ElEQVR4nO2d2WKqOhRAjaJWUJwQi9Y62/ZU///3LkFJssMGgmIV714v55QxS5KQmVqNIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIIjHMpk0QrqO4zTtEHdwYTbz2pbEC9qp9Dvz1n3oyJucgzEYuLbtvzcavYmZXWu8ZlXlezPsDHI87UcHsgT6WYJeeMBm3+oHnjdzQ3gk9ZuSpdOtl07XWTZz8EUgfJ5sonCF/0ZhtMLAeu3+vHVYDU9HrthJF7QY+2waReanZeKuGRuk7W0yNu79ZXDuQi98jk7KPsa+zLKj56bL2Brf02Gs/rdhuRNeSlKcZMTfirFhDEttM7b/86DcCZ8xD9ncYq0/D8q9mLIVsvXthQxtND5O2fzPQ3IvHPaGbP16KcMhspW9lOEI2fpahh/I1swSa8Vw2BjZ+lqGX8hWxLDXUMHKrBNwhCxINLKJDlzkHKRQ1HDJjkhYkarjDlYtkUu54ACRkOs5lVT+W3bN67SfxQ2RwPYQw3/wRv/yDEUkyDNsFzPEElVxw8b5voA37U7Jwt6rGSZrV1UyXJgYflfEsIkZ1k0M2ao8w8ZzGjK3NMPaXxsaxdIQ+G6quuEeudumsoZYLMUMYT35JQ2ZfbshP3BibogUwa4wfDc2VJOioeFbEHizgevavHnecbpRubTrOE3ft113YHmBfitHbdRfXmGYLEWHr6dA3/aLG04LG+Y3Uw60M4o6QW41VKrKhoaufuUEpRsmG0yLGMqkaGiY393zbIbifEPDtJ4SyYMMV6mGcTOIoWE3N0zlGvp6yYTjFDJkq/MRhoaL3DC52hnX23HKMLxkHqbpsAtA2kMeZHjIMDxf4ro3PhJpSzdMRpvChtNSDfUhEg8xHGmBmL+AYQvctKmXrPwSDf2yDZPd2fmGTu1TC0avaoaJpjRoWOcNPIBTmuGiqoZ8MAOgDQMmDHuFDZvPYMjT7lQLyPxpDd+vNMxuILvBUE8ANxsm72FmmCg/lmXolGpo32CYUd94FcPa+grD3VBlhBTE/8bQMjLUw2JimD9cTm/jv8XvVsNau7hh/ojHpzAUbxi9gPp6hqn5yA2G709lmDoa/AZDvSR7tVwcwKThMtewm7bjZQzVBrOfYoa2PjL9/obJ5r3QcJZtqLat45UH0zc+8lD1Cz7EEDTrzp7a0L3OEEYtrNfm6Q0T/SfQ0IY7v0o11CstDzHUuleQsRRVN9R3By9vWBu+mmEiI0r0Uz+3oYP0Y0LDRIEg0bjyeoZ621vVDbFpKKeKG3r/3iRDrDO+0el35vNWa/W2G03HYjDHZPiWyS5h2NvBA/7IsLK8vuGADCsPGVaf/6+hjRxbTciw+szI8F7Uvz/OjJMNpmHR1Mkf4GeIoSGYm2e4vE02smknmW1b0VCWYTmShoZa5e/ze7rvY7+9ORmG4malrMxhaNjHKnbbW1Z3STeUzaVYLbQw1g2GyMgpc9IN5bicUpY9uM3whl853VBW8UuZjGyl9B9qiSzN0KCvLAVpmGjWE8MgSyk63mp4dTzNMIxbfDbIacUparjyAqs/lobYmhNGZBnW5qPtcTwvZ5GjoobniCM7RbE1J4zINCyT6wxlN4VsUusOLK8dWANHSZq9yZloU92a/85n8YNBDcNDa+oE/su2yXl7iN3Zr9qu9nDt/u/K6tUSBwtDdORetqEngncZBh+oAxV/Yu26YtGNJ/R7mGFn/DPeHnlRpq+MYIlmcsTNsGFsmcTXaCNBs2qz7VE5L8ZLGX2ZbSjCcJn1pE3WZ+uFZmgrw2vnmiFvP5d7J0ovzwjcS+3fF2/KxVFsW4km6aka9KKG/NeTg7zjS7EEE2gISn1+wtASf/C8OcUQdFJekhY+AvQmQ8DpshdpuD9AQ8AOGobR9iP+f7RIR4ph8vrJUbzlGn6ILAL7JTMMo31y4FOgDAB0TQ3Pk2UtdF/CEJ2NYGB4EiW7sKy8brmLXq3XFeFZZhg2auqwxrYcp3peDcjE8FyY2l5r2DWMpXHlovEraxnxPg8abl2lI5wfLcvXbdm7Ws80XC39jfiDl6aVPstD05YHlmeol7x7S0+Ebg4NG+pL1IWG4t1zSVwphjzVz8A1ZP4V9Umv72EoC8fdAK5g8wYMpzUtb1EM+yKu1TINPfDUeCZwAgfK6XW6YXLuWjcxl1UYtgaDQV9NGuf9gw+msQOG3FfmR21g+B3/J+5YTjH0E78SuKASSW4yPA9RUBIAf4gTJDcYAcPoLQ/+0ifGMHnPFENe9pL1/0AdHXHO1UXOCgyDlFmyaYaX31lOROC1VOytNAWGcOGEFjAUZ8e1pRTDnh4P5B9u+Yby51sppdR/S7ljDAwDYHgAhjMxSczNNKwBw75a0DhneCLjOalBD1Lm4+cYymg6lyWSqNEhzs/XwDAKgihC7oGhKy7+nWsopTrqT7aKzhNZXb7he1467Mryrifv2gUPKmkoKs5DaCgfjFXMUGZv8PmCZQSDlJU/0gw7Td/21CFedXlXnrzkhOikoQjQDhpKpc88Q5k6uKGcS/Zt+bJGd5uhzki963inDMMEhtHDEa+vEzC0lf8HhQz1KWAxYHxK+0ZDXlwYo3uA4QyE9QMY+uoVJtmGMhGARK8BGo9Qw4WxYVT0maO7gCGsM/wAw6baZjDPMRQZQGSIvFQ5q9IMj+d6KD6uawLq+Pw4sdTUFgTOUR8NL39kGa6BIfxxRV7a14KeNGzAwfhphqIpQb7/97IZrqEaRs9aNA18AcM6COk+21CUYS/t4YqiL974oD7QMTO8vEw/v8abzWi3e9u3AlspKfjnyLMNI2Ow/YzgAZeGTWDIbynn2vBS4yK86OnjZ834I4UtUR/KSYlnGN76UiSa1uUbH3RJtFJWhtQMe3mt936/EyQ7QBYx0Tu3J/7MuRigkXfSu9Wfe3yvKMKDQw9mhlVA1j/B5l/McFIZw7qsGMk2mwM4ZI8OUK2M4ZRNf9uevVzayuoysBH/H7oAmslaR08B1hS1gofsopeTTmUMkck6+rrII7SXrjKG3wnBtZ7rn2CF+EJlDBPNQ6NEXfCHYQPFP6tiqK15sEb6Io9oL+6mKoYNpYloe0AHcjH06w9Dg5XxnoRGfeHYru8sUkpdYenlF9m8ur5//tlY4l9B8EyWxqsGA3QKE3+0Vw9BeDIOKcPj2i8zwvQzbcjPuKSRgY+mj36/g9Ng6MdLqsYc65a50GXsVPUPkzU22FgaAe/IOu4OrU78BcTzhwb9JsbSucfXEG9jEdYYt5kf/OjhAx2qxCrvKXtI5aQyHDe/JgWzSW8SDWKv8w/BLJylH0ZH+V3Z+AuZg8HMMsLTvjkbBJ7ZiZnMZvEXbnmAmo5TB9+5IQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjiQfwHydOuYFgk3kEAAAAASUVORK5CYII=" alt="Net Bangkig" style={{ marginRight: '10px', width: '120px' }} />
            <div>
              <h5 className="text-start">Net Banking</h5>
              <p className="text-start">Pembayaran dengan Net Banking</p>
            </div>
            <p></p>
          </div>
          <hr />
          <div className="d-flex justify-content-around align-items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujPz8hzR_IL9rkWvU-pPakftNwtZORmN9cQ&usqp=CAU" alt="M-Banking" style={{ marginRight: '10px', width: '120px' }} />
            <div>
              <h5 className="text-start">M-Banking Payment</h5>
              <p className="text-start">Pembayaran dengan M-Banking</p>
            </div>
            <p></p>
          </div>
          <hr />
          <div className='d-flex justify-content-end gap-3'>
          <Button variant="danger">Batalkan</Button>
          <Link to={'/tiketku'}><Button style={{background:'#1250A2'}}>Bayar Sekarang</Button></Link> 
          </div>
        </div>
        </Container>
      </Modal.Body>
    </Modal>

  );
}

export default PaymentPage;
