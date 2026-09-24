import '../styles/title_2.css';

import type { JSX } from 'react';

function Title2(): JSX.Element {
  return (
    <section className="title_2">
      <div className="title_2-container">
        <div className="title_2-block">
          <h2 className="title_2-block-title">Трактир «Пушкин»</h2>
          <div className="title_2-block-text">
            <p className="title_2-block-text-price">₽₽₽ • Европейская</p>
            <div className="title_2-block-text-time">40 - 50 мин</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Title2;