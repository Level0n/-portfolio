import '../styles/nav_2.css';

import type { JSX } from 'react';

function Nav2(): JSX.Element {
  return (
    <nav className="nav_2">
      <ul className="nav_2-ul">
        <li className="nav_2-ul-li nav_2-ul-li-active">Закуски</li>
        <li className="nav_2-ul-li">Салаты</li>
        <li className="nav_2-ul-li">Супы</li>
        <li className="nav_2-ul-li">Горячие блюда</li>
        <li className="nav_2-ul-li">Гарниры</li>
        <li className="nav_2-ul-li">Десерты</li>
      </ul>
    </nav>
  );
}

export default Nav2;