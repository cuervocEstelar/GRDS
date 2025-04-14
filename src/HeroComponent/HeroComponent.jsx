import React from 'react';

const HeroComponent = ({ HeroImgSrc }) => {
  return (
    <>
      <figure style={{ position: 'relative', margin: 0 }}>
        <img src={HeroImgSrc} alt=""  className="HeroImg" style={{
          width: '100%',
          display: 'block',

        }} />

        <svg
          style={{ position: 'absolute', bottom: -2, left: 0, zIndex: 9, width: '100%' }}
          className="borde"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1921 120.74"
        >
          <path
            stroke="#000"
            strokeMiterlimit="10"
            d="M.5.55v119.69h1920V.55c-281.14,28.16-589.85,46.59-922.44,47.89C636.33,49.85,302.23,30.77.5.55Z"
          />
        </svg>
      </figure>
    </>
  );
};

export default HeroComponent;
