// eslint-disable-next-line no-unused-vars
import React from 'react'
import KeranjangList from './molecules/KeranjangList';
import { amikom } from '../../../assets/main';

function Keranjang() {
  return (
    <>
     <KeranjangList PosterAcara={amikom} NamaAcara='Amikom' TanggalAcara='Jum, 9 November' WaktuAcara='12:00' LokasiAcara='Sleman' />
     <KeranjangList PosterAcara={amikom} NamaAcara='Amikom' TanggalAcara='Jum, 9 November' WaktuAcara='12:00' LokasiAcara='Sleman' />
    </>
  )
}



export default Keranjang