import '../../../styles/artist-photo.css';

import type { JSX } from 'react';

function ArtistPhoto(): JSX.Element {
  return (
    <img className='artist-photo' src="../../../../images/artist.png" alt="" />
  );
}

export default ArtistPhoto;