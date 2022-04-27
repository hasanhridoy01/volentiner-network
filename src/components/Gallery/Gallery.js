import React from 'react';
import './Gallery.css';

const Gallery = ({gallery}) => {
  //Destructing data 
  const {id, name, img} = gallery;
  return (
    <div className='g-3 col-sm-12 col-md-6 col-lg-3'>
     <div className="galllery-img card border-0">
       <img src={img} alt="" />
       <div className="card-body">
         <h6>{name}</h6>
       </div>
     </div>
    </div>
  );
};

export default Gallery;