import '../../../styles/artist-contact.css';

import type { JSX } from 'react';

function ArtistContact(): JSX.Element {
  return (
    <div className='artist-contact'>
      <div className='artist-contact-top'>
        <p className='artist-contact-top-text'>Have some questions?</p>
        <a href="">
          <img src="../../../../images/arrow.svg" alt="arrow" />
        </a>
      </div>
      <a className='artist-contact-title' href=''>Contact me</a>
    </div>
  );
}

export default ArtistContact;