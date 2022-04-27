import React from 'react';
import './Banner.css';
import banner from '../../logos/bg2.jpg';

const Banner = () => {
  return (
    <div className='banner'>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;