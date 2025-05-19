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


if (check) {


Object.keys(check  ).forEach(key => {

  const valor = check[key] ;

  // Verifica si el valor de la propiedad coincide con el valor que deseas buscar
  // Si coincide, puedes realizar alguna acción, como mostrar una image
  if (String(valor.awardIds[0]) === String(idPremio ||rewardDesktop.awardId ))  {
     
    finalCode = valor.promotionCode;
    // Puedes hacer return aquí si solo quieres la primera coincidencia
    if (  valor.isVerified && valor.isVerified === false  || valor.didDeposit && valor.didDeposit === false ) {
      statusFinal = 'Pendiente'; // Imagen por defecto
      statusColor = '#fef1d1'; 
      TextColor = '#8a6f3b';
    } else if (valor.isVerified && valor.isVerified === true || valor.didDeposit && valor.didDeposit === true) {
      statusFinal  = 'Cobrar';
      statusColor = 'green';
      TextColor = 'white';
      console.log("cobrar ", valor.awardIds[0], "id",idPremio)
      console.log("----------------")
    } else if (valor.isVerified === 2) {
      statusFinal = 'Cobrado'; // Imagen por defecto
      statusColor = 'blue';
      TextColor = 'white';
    }  else {

      console.error("no hay premio")
      console.log("id ", valor.awardIds[0], "id",idPremio)
      console.log("deposito ", valor.didDeposit)
      console.log("verificado ", valor.isVerified)
      console.log("valor" , valor)
      console.log("----------------")
      
      }
    

  }else {

    console.log("no pude entrar en el loop "
      ,valor.awardIds[0],idPremio

    )
    console.log("----------------")
  }



});


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
