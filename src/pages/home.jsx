import React from 'react'

function Home() {
  return (
    <section className='container text-left px-0 overflow-hidden'>
      <div className='home-content row row-cols-1 g-4'>
      <img className='proj-media-img w-10 img-fluid'
          src="/images/1-Captura-de-pantalla-2016-02-18-a-las-21-38-40EXP2.jpg"
          alt="Sulveilance camera still of deers in the forest at night spotted with a strong light."
        />
        <img className='proj-media-img w-10 img-fluid'
          src="/images/9-Captura-de-pantalla-2017-04-05-a-las-13-07-59EXP.jpg"
          alt="Sulveilance camera still of a worksite from a top-down view in the middle of the city at daylight."
        />
        <img className='proj-media-img w-10 img-fluid'
          src="/images/2-Captura-de-pantalla-2017-04-05-a-las-13-40-45EXP2.jpg"
          alt="Sulveilance camera still of an empty parking from a top-down. Only diagonal yelow lines over the asphalt are visible."
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