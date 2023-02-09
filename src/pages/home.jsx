import React, { useState, useEffect } from 'react';

function Home() {

  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  const images = [
    {
      src: '/images/1-Captura-de-pantalla-2016-02-18-a-las-21-38-40EXP2.jpg',
      alt: 'Sulveilance camera still of deers in the forest at night spotted with a strong light.',
    },
    {
      src: '/images/9-Captura-de-pantalla-2017-04-05-a-las-13-07-59EXP.jpg',
      alt: 'Sulveilance camera still of a worksite from a top-down view in the middle of the city at daylight.',
    },
    {
      src: '/images/2-Captura-de-pantalla-2017-04-05-a-las-13-40-45EXP2.jpg',
      alt: 'Sulveilance camera still of a worksite from a top-down view in the middle of the city at daylight.',
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
    const picRandom = Math.floor(Math.random() * (images.length - 1));
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