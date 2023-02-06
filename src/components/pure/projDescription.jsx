import React from 'react';
import PropTypes from 'prop-types';


const ProjDescription = ({ descriptions }) => {
  return (
    <div>
      {descriptions.map((text, index) => {
        const className = `proj-description-${text.language} ${text.language === 'es' ? 'text-secondary' : ''}`;
        return(
        <p key={index}
          className={className}
        >
          {text.value}
        </p>
        )
      })}
    </div>
  );
};


ProjDescription.propTypes = {

};


export default ProjDescription;
