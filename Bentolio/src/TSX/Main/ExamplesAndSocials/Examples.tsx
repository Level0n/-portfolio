import '../../../styles/examples.css';
import { useState } from 'react';
import type { JSX } from 'react';

function Examples(): JSX.Element {
  const titles: string[] = ['Musea', 'Elara', 'Verve', 'Zephyr'];
  const [activeBlock, setActiveBlock] = useState<number>(0);

  return (
    <div className='examples'>
      {titles.map((title, index) => (
        <div className={`examples-block ${activeBlock === index ? 'examples-block-active' : ''}`} onClick={() => setActiveBlock(() => index)} key={index}>
          <div className='examples-block-text'>
            <h3 className='examples-block-text-title'>{title}</h3>
            <a className='examples-block-text-arrow' href="">
              <img src="../../../images/arrow.svg" alt="arrow" />
            </a>
          </div>
          <a href="">
            <img className='examples-block-img' src="../../../images/musea.png" alt="" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Examples;