import '../../../styles/socials.css';
import type { JSX } from 'react';

function Socials(): JSX.Element {
  return (
    <div className='socials'>
      <a className='socials-link' href="">Instagram</a>
      <a className='socials-link' href="">Twitter</a>
      <a className='socials-link' href="">Linkedin</a>
    </div>
  );
}

export default Socials;