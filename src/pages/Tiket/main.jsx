// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Tiketku.scss";

import OpsiTiket from "./components/molecules/OpsiTiket";
import Title from "../../components/atoms/Title";

function Tiketku() {
  return (
    <>
  
      <div className="container">
   
       <Title title='Tiket'/>
     
        <OpsiTiket />
      
      </div>
      
    </>
  );
}

export default Tiketku;
