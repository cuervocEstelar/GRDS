import React, { useState } from 'react';
import './Button.css';

const Button = (props) => {
  const [showModal, setShowModal] = useState(false);
console.log(props.btnStatus);
  const handleClick = () => {
    if (props.btnStatus) {
      setShowModal(true);
    } else {
      console.log('No promotion code');
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`btn-cupon ${props.btnStatus}`}
        disabled={!props.btnStatus || props.btnStatus === "disabled"} // Deshabilita si es false o "disabled"
      >
        {props.text}
      </button>    

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Código Promocional</h2>
            <p>{props.promotionCode}</p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
