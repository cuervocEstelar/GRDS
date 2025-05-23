import React, { useState } from 'react';
import styles from './TicketPromo.module.css';
import ModalCupon from './ModalPremio';


const TicketPromo = ({rewardDesktop, img, clientRUT, title, description, note , codeCupon ,qr ,clientName, check , idPremio, checksCampaign, scope }) => {

  // console.log("----------------")
  // console.log(check, " = check del usuario ")
  //  console.log(idPremio, " = id del premio ")
  //  console.log(rewardDesktop, "= rewardDesktop")
  // console.log(checksCampaign, "= checksCampaign")
  // console.log(scope.includeDocNumbers , "scope")
let finalCode = "";
let statusFinal= "";
let statusColor = "";
let TextColor = "";


if (!check) {
  console.log("No hay premios disponibles para este usuario");

  
  return ;
}

const idBuscado = String(idPremio || rewardDesktop.awardId);

for (const key in check) {
  const valor = check[key];
  const awardId = String(valor.awardIds?.[0]);

  if (awardId !== idBuscado) {
    console.log("No coincide el ID del premio:", awardId, "vs", idBuscado);
    continue;
  }

  finalCode = valor.promotionCode;

  const verificado = valor.isVerified;
  const deposito = valor.didDeposit;

  if (verificado === 2) {
    statusFinal = 'Cobrado';
    statusColor = 'blue';
    TextColor = 'white';
  } else if (verificado === true || deposito === true) {
    statusFinal = 'Cobrar';
    statusColor = 'green';
    TextColor = 'white';
    console.log("✅ Cobrar:", awardId, "vs", idBuscado);
  } else if (verificado === false || deposito === false) {
    statusFinal = 'Pendiente';
    statusColor = '#fef1d1';
    TextColor = '#8a6f3b';
  } else {
    console.error("No hay estado claro para el premio:");
    console.log("ID:", awardId);
    console.log("Verificado:", verificado);
    console.log("Depósito:", deposito);
    console.log("Objeto completo:", valor);
  }

  break; // Salimos del bucle tras encontrar coincidencia
}





  // Estado para controlar la visualización del modal de cupó
  const [showModal, setShowModal] = useState(false);

// console.log(status);
  const handleStatusClick = () => {
  setShowModal(true); // Muestra el modal
  };


  return (

    <>
      <div className={styles.ticket}>
        <div className={styles.left}>
          <img src={img || rewardDesktop.awardImage|| "/papasFritas.png"} alt="Icono" className={styles.icon} />
          <span className={styles.status} onClick={status === 2 || status === 0 ? undefined : handleStatusClick} style={{ backgroundColor: statusColor , color: TextColor }}>
            {statusFinal || 'Defecto'}
          </span>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.right}>
          <h3 className={styles.title}>{ title || rewardDesktop.awardName || 'TITULO DEFECTO' }</h3>
          <p className={styles.description}>{description || rewardDesktop.awardDescription || 'Description defecto'}</p>
          <p className={styles.note}>{note || 'Válido hasta agotar stock'}</p>
        </div>
      </div>

      {showModal && (
        <ModalCupon
          clientRUT={clientRUT}
          userName={clientName}
          code={ finalCode || "defecto"}
          ticketQR={qr}
          title={title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default TicketPromo;
