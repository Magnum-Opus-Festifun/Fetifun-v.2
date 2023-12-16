// eslint-disable-next-line no-unused-vars
import React from 'react';
import CarouselComponent from '../../components/molecules/Carousel';
import SearchingComponent from './Components/search';
import BannerHome from './Components/molecules/BannerHome';
import FAQ from './Components/molecules/FAQ';
import RekomendasiBeranda from './Components/RekomendasiBeranda';


function Beranda() {


  return (
    <div className='container'>
      <CarouselComponent />
      <SearchingComponent />
      <RekomendasiBeranda />

      <BannerHome />
      <FAQ />
    </div>
  );
}

export default Beranda;
