import './styles/index.css';
import './styles/fonts.css';

import Header from './JSXs/Header.jsx';
import Page1 from './JSXs/Page1.jsx';
import Page2 from './JSXs/Page2.jsx';
import Footer from './JSXs/Footer.jsx';
import ButtonUp from './JSXs/ButtonUp.jsx';

import { useState } from 'react';

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <Header setPage={setPage} />
      {page === 1 ? <Page1 setPage={setPage} /> : <Page2 />}
      <Footer setPage={setPage} />
      <ButtonUp />
    </>
  );
}

export default App;