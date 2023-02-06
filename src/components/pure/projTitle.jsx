import React from 'react';
import PropTypes from 'prop-types';


const ProjTitle = ({ title }) => {
  return (
    <h2 className='proj-title col-auto'>
      {title}
    </h2>
  );
};


ProjTitle.propTypes = {

};


export default ProjTitle;
