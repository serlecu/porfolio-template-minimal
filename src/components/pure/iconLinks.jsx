import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSoundcloud, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const IconLinks = ( {onMobile} ) => {

  return (
      <div>
        <div className='d-flex flex-row overflow-hidden'>
          <div className={ onMobile ?  'icon-link me-2 fa-lg' : 'icon-link me-2' }
            type='button' data-bs-toggle="modal" data-bs-target="#emailModal">
            <FontAwesomeIcon icon={faEnvelope}/>
          </div>
          <a className={ onMobile ?  'icon-link me-2 fa-lg' : 'icon-link me-2' }
            href="https://soundcloud.com/sergiolecuona" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSoundcloud} />
          </a>
          <a className={ onMobile ?  'icon-link me-2 fa-lg' : 'icon-link me-2' }
            href="https://www.instagram.com/sergio_lecuona/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className={ onMobile ?  'icon-link me-2 fa-lg' : 'icon-link me-2' }
            href="https://www.linkedin.com/in/sergiolecuona/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
  );
}

export default IconLinks;
