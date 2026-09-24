import '../../../styles/artist-title.css';

import type { JSX } from 'react';

function ArtistTitle(): JSX.Element {
  return (
    <div className='artist-title'>
      <h1 className='artist-title-title'>Artist Redefining <span className='artist-title-title-italic'>Architecture</span> with AI-Driven Design</h1>
    </div>
  );
}

export default ArtistTitle;