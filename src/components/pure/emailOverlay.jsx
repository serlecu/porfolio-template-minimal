import React from 'react';
import copy from 'copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const EmailOverlay = () => {

  const copyToClipboard = () => {
    copy("hola@sergiolecuona.es");
    alert(`Coppied to clippboard`);
}

  return (
    <div 
      className="modal fade"
      id="emailModal" 
      tabIndex="-2" 
      aria-labelledby="emailModalLabel" 
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content position-">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="exampleModalLabel">Contact</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className='modal-body'>
            <div className='d-flex flex-row overflow-hidden mb-2'>
              <p>
                If you want us to work together or just say hi,<br/> don't hesitate to write me!
              </p>
            </div>
            <div className='d-flex flex-row overflow-hidden mb-2'>
              <p className='me-2'>  
              Email me at <a href="mailto:hola@sergiolecuona.es" target="_blank" rel="noreferrer">
                hola@sergiolecuona.es</a>
                
              </p>
              <button className='btn btn-sm btn-secondary block'
                  onClick={copyToClipboard}
                  //style="--bs-btn-padding-y: .25rem;"
              >
                  Copy
                </button>
            </div>
          </div>
          <div className="modal-footer">
            <div className='d-flex flex-row overflow-hidden'>
              <a className='icon-link me-2 fa-lg'
                href="https://soundcloud.com/sergiolecuona" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSoundcloud} />
              </a>
              <a className='icon-link me-2 fa-lg'
                href="https://www.instagram.com/sergio_lecuona/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className='icon-link me-2 fa-lg'
                href="https://www.linkedin.com/in/sergiolecuona/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailOverlay;