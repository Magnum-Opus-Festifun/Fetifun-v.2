import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTicketAlt } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti'; 
import { Button} from 'react-bootstrap';


const TicketInput = ({ id }) => (
    <div className="row border border-1 align-items-center my-3 py-2 d-flex" key={id}>
        <div className="col-auto">
          <FaTicketAlt />
        </div>
        <div className="col-auto">
            <label htmlFor="inputjenisTiket" className="col-form-label text-secondary">Jenis Tiket</label>
        </div>
        <div className="col-auto">
            <input type="text" id="inputjenisTiket" className="form-control" aria-describedby="jenisTiketHelpInline" />
        </div>
        <div className="col-auto">
            <label htmlFor="inputHarga" className="col-form-label text-secondary">Harga</label>
        </div>
        <div className="col-auto">
            <input type="text" id="inputHarga" className="form-control" aria-describedby="hargaHelpInline" />
        </div>
        <div className="col-auto">
            <label htmlFor="inputJumlah" className="col-form-label text-secondary">Jumlah Tiket</label>
        </div>
        <div className="col-auto">
            <input type="text" id="inputJumlah" className="form-control" aria-describedby="jumlahHelpInline" />
        </div>
        <div className="col-auto ms-auto">
            <TiDeleteOutline size={30} style={{ fill: 'red', cursor: 'pointer' }} onClick={() => removeTicket(index)} />
        </div>
    </div>
  );

const CreateTicket = () => {
  const [tickets, setTickets] = useState([<TicketInput key={0} />]);
  const [ticketId, setTicketId] = useState(1);

  const addTicket = () => {
    const newTickets = [...tickets, <TicketInput key={ticketId} />];
    setTickets(newTickets);
    setTicketId(ticketId + 1);
  };

  const removeTicket = (idToRemove) => {
    const updatedTickets = tickets.filter((_, index) => index !== idToRemove);
    setTickets(updatedTickets);
  };

  return (
    <div>
      <Button onClick={addTicket} style={{background:'#1250A2'}}>Tambah Tiket</Button>
      {tickets.map((ticket, index) => (
        <div key={index}>{ticket}</div>
      ))}
    </div>
  );
};

export default CreateTicket;
