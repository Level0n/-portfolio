import '../styles/button_up.css';
import { useRef, useEffect, useState } from 'react';
import type { FC } from 'react';

const ButtonUp: FC = () => {
  const buttonUp = useRef<HTMLButtonElement | null>(null);
  const [hideButton, setHideButton] = useState<boolean>(() => true);

  function pageUp(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    function hideButton(): void {
      setHideButton(window.pageYOffset === 0);
    }

    window.addEventListener('scroll', hideButton);

    return () => window.removeEventListener('scroll', hideButton);
  }, []);

  return (
    <button ref={buttonUp} className={`button_up ${hideButton ? 'button_up-hide' : ''}`} onClick={pageUp}>
      <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.61875 0.0325893L7.65312 0L15.2746 7.24732L13.6759 8.69687L8.52902 3.87366V24.9897H6.7433V3.84196L1.5625 8.69687L0 7.24732L7.60357 0L7.6192 0.0325893H7.61875Z" fill="white"/>
      </svg>
    </button>
  );
}

export default ButtonUp;