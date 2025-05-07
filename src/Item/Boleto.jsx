import React, { useState } from 'react';
import styles from './TicketPromo.module.css';
import ModalCupon from './ModalPremio';

const TicketPromo = ({ img, status, title, description, note , codeCupon ,qr ,clientName}) => {
  const [showModal, setShowModal] = useState(false);



// console.log(status);
  const handleStatusClick = () => {
  setShowModal(true); // Muestra el modal
  };
  let statusFinal= "";
  let statusColor = "";
  let TextColor = "";
  if (status === 0) {
    statusFinal = 'Pendiente'; // Imagen por defecto
    statusColor = '#fef1d1'; 
    TextColor = '#8a6f3b';
  } else if (status === 1) {
    statusFinal  = 'Cobrar';
    statusColor = 'green';
    TextColor = 'white';
  } else if (status === 2) {
    statusFinal = 'Cobrado'; // Imagen por defecto
    statusColor = 'blue';
    TextColor = 'white';
  }
  return (
    <>
      <div className={styles.ticket}>
        <div className={styles.left}>
          <img src={img || "/papasFritas.png"} alt="Icono" className={styles.icon} />
          <span className={styles.status} onClick={status === 2 || status === 0 ? undefined : handleStatusClick} style={{ backgroundColor: statusColor , color: TextColor }}>
            {statusFinal || 'Pendiente'}
          </span>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.right}>
          <h3 className={styles.title}>{title || 'PAPAS FRITAS'}</h3>
          <p className={styles.description}>{description || 'Regístrate y obtén el primer premio'}</p>
          <p className={styles.note}>{note || 'Válido hasta agotar stock'}</p>
        </div>
      </div>

      {showModal && (
        <ModalCupon
          userName={clientName}
          code={codeCupon}
          ticketQR={qr}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default TicketPromo;
