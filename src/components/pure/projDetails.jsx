import React from 'react';
import PropTypes from 'prop-types';


const ProjDetails = ({details}) => {
  return (
    <div className='proj-details col'>
      <p className='text-secondary'>
          [ {details.media} | {details.year} ]
        </p>
    </div>
  );
};


ProjDetails.propTypes = {

};


export default ProjDetails;
