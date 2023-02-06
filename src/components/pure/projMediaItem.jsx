import React from 'react';
import PropTypes from 'prop-types';
import { MEDIA_TYPE } from '../../models/project.enum';


const ProjMediaItem = ({ item }) => {

  switch (item.type) {
    case MEDIA_TYPE.IMAGE:
      return (
        <img className='proj-media-img w-10 img-fluid'
          src={item.src}
          alt={item.alt}

        />
      );

    case MEDIA_TYPE.YOUTUBE:
      return null;

    case MEDIA_TYPE.VIMEO:
      return null;

    case MEDIA_TYPE.SOUNDCLOUD:
      return (
        <iframe className='proj-media-soundcloud'
          title="soundcloud player"
          width="100%"
          height="100%"
          allow="autoplay"
          src={item.url}
        >
        </iframe>
      );

    case MEDIA_TYPE.BANDCAMP:
      return null;

    case MEDIA_TYPE.SPOTIFY:
      return null;

    default:
      return null;
  }
};


ProjMediaItem.propTypes = {

};


export default ProjMediaItem;
