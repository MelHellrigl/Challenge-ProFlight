import logo from './assets/Foto logo ProFlight.png';
import arrowLeft from './assets/ArrowLeft.svg';
import arrowRight from './assets/ArrowRight.svg';
import logoActivo from './assets/LogoActivo.png';
import images from './exports/images';
import './App.css';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState(0);

  const handleClick = (e) => {
    setCurrent(Number(e.target.id));
  };

  const handleNext = (e) => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const handlePrev = (e) => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Challenge ProFlight - Melissa Hellrigl</h1>
      </header>

      <div className='carrousel'>
        <div className='arrows'>
          <img src={arrowLeft} alt='arrow left' onClick={handlePrev} />
        </div>
        {images.map((imagen, index) => {
          return (
            <img
              src={current === index ? logoActivo : imagen}
              key={index}
              id={index}
              alt='imagen'
              onClick={handleClick}
            />
          );
        })}
        <div className='arrows'>
          <img src={arrowRight} alt='arrow right' onClick={handleNext} className='arrows' />
        </div>
      </div>
    </div>
  );
}

export default App;
