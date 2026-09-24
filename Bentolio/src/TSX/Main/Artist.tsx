import '../../styles/artist.css';

import ArtistTitle from './Artist_Blocks/ArtistTitle.tsx';
import ArtistPhoto from './Artist_Blocks/ArtistPhoto.tsx';
import ArtistAbout from './Artist_Blocks/ArtistAbout.tsx';
import ArtistContact from './Artist_Blocks/ArtistContact.tsx';

import type { JSX } from 'react';

function Artist(): JSX.Element {
  return (
    <section className='artist'>
      <ArtistTitle />
      <ArtistPhoto />
      <ArtistAbout />
      <ArtistContact />
    </section>
  );
}

export default Artist;