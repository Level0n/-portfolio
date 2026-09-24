import './styles/index.css';
import './styles/fonts.css';

import Header from './TSXs/Header.tsx';
import Page1 from './TSXs/Page1.tsx';
import Page2 from './TSXs/Page2.tsx';
import Footer from './TSXs/Footer.tsx';
import ButtonUp from './TSXs/ButtonUp.tsx';

import { useState } from 'react';

import type { JSX, SetStateAction, Dispatch } from 'react';

export type SetPageProps = {
  setPage: Dispatch<SetStateAction<number>>;
}

export function App(): JSX.Element {
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <Header setPage={setPage} />
      {page === 1 ? <Page1 setPage={setPage} /> : <Page2 />}
      <Footer setPage={setPage} />
      <ButtonUp />
    </>
  );
}