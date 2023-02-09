import React from 'react';
import PropTypes from 'prop-types';


const ProjDescription = ({ descriptions }) => {
  return (
    <div className='container p-0 g-10'>
    <div className='proj-description-en mb-4'>
      {
        descriptions.filter(({ language }) => language === 'en')
        .map((text, index) => {
            return (
              <p key={index}>
                {text.value}
              </p>
            )
          })
      }
    </div>
    <div className='proj-description-es text-secondary'>
      {
        descriptions.filter(({ language }) => language === 'es')
          .map((text, index) => {
            return (
              <p key={index}>
                {text.value}
              </p>
            )
          })
      }
    </div>
    </div>
  );
};


ProjDescription.propTypes = {

};


export default ProjDescription;
