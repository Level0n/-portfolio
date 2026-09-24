import Artist  from './Main/Artist';
import ExamplesAndSocials from './Main/ExamplesAndSocials';
import '../../src/styles/main.css';
import type { JSX } from 'react';

function Main(): JSX.Element {
  return (
    <main className='main'>
      <div className='main-container'>
        <Artist />
        <ExamplesAndSocials />
      </div>
    </main>
  );
}

export default Main;