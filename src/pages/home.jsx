import React, { useState, useEffect } from 'react';

function Home() {

  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  const images = [
    {
      src: '/images/portfolio_live.jpg',
      alt: '',
    },
    {
      src: '/images/portfolio_cubes.jpg',
      alt: '',
    },
    {
      src: '/images/portfolio_pam.jpg',
      alt: '',
    },
  ];

  useEffect(() => {
    changeImageRandom();
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      changeImageNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentPicIndex]);

  function changeImageNext() {
    const nextPicIndex = (currentPicIndex + 1) % (images.length);
    setCurrentPicIndex(nextPicIndex);
  }
  function changeImageRandom() {
    const picRandom = Math.floor(Math.random() * (images.length));
    setCurrentPicIndex(picRandom);
  }

  return (
    <section className='container text-left px-0 overflow-hidden'>
      <div className='home-content row row-cols-1 g-4'>

        <img className='proj-media-img w-10 img-fluid'
          src={images[currentPicIndex].src}
          alt={images[currentPicIndex].alt}
        />

        <div className='home-text'>
          <p className='home-introduction'>
          </p>
        </div>

      </div>
    </section>
  )
}

export default Home