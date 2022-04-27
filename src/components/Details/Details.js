import React from 'react';
import './Details.css';
import img from '../../images/cleanWater.png';

const Details = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="card border-0 p-5">
            <h3>Hello This is Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti praesentium asperiores, tempora possimus earum laborum adipisci magni maiores, delectus quae quos pariatur numquam. Quasi aut fugiat, voluptatum cupiditate quam enim nisi assumenda blanditiis similique, dolor vero quisquam possimus facere, sint magni aperiam animi et quibusdam odio iusto veniam nostrum asperiores cumque officiis? Expedita rem commodi at aspernatur soluta possimus quis modi voluptates voluptas, minus, accusantium, debitis impedit libero iure quisquam! Voluptatem explicabo provident illum minima, repellendus ipsum obcaecati nulla numquam in ipsam culpa labore eaque? Maiores eaque maxime dolore, voluptatem aspernatur voluptate perspiciatis quia veniam culpa obcaecati, autem esse minus.</p>
            <button className='btn btn-danger w-25'>CheckOut</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="card border-0 p-5">
            <img className='imge' src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;