import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

const Gallery = ({gallery}) => {
  const navigate = useNavigate();
  //Destructing data 
  const {id, name, img} = gallery;

  //Handle Details Page on CLick
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  }
  return (
    <div onClick={() => handleDetails(id)} className='g-3 col-sm-12 col-md-6 col-lg-3'>
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