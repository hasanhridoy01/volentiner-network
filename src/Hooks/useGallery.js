import { useEffect, useState } from "react"

const useGallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch('gallerey.json')
    .then(response => response.json())
    .then(data => setGallery(data));
  },[]);
  return [gallery];
}

export default useGallery;