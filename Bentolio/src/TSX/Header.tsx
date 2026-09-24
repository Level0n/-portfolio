import '../styles/header.css';
import type { JSX } from 'react';

function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='header-container'>
        <a className='header-logo' href=''>JULIA <span className='header-logo-bold'>HUANG</span></a>
        <nav className='header-nav'>
          <a className='header-nav-link' href=''>PROJECTS</a>
          <a className='header-nav-link' href=''>ABOUT</a>
          <a className='header-nav-link' href=''>CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;