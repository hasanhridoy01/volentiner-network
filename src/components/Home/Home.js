import React from 'react';
import useGallery from '../../Hooks/useGallery';
import Gallery from '../Gallery/Gallery';

const Home = () => {
  const [gallerys, setGallery] = useGallery();
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        {
          gallerys.map(gallery => <Gallery key={gallery.id} gallery={gallery}></Gallery>)
        }
      </div>
    </div>
  );
};

export default Home;