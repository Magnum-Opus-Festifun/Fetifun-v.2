import { amikom } from "../../../assets/main";
import TiketkuList from "./molecules/TiketkuList";




function Tiketku() {
  return (
    <>
   <TiketkuList PosterAcara={amikom} NamaAcara='Amikom' TanggalAcara='Jum, 9 November' WaktuAcara='12:00' LokasiAcara='Sleman'/>

    </>
  )
}

export default Tiketku