import React, { useEffect } from 'react';
import styles from './Item.module.css';
import Boleto from './Boleto';
import { io } from "socket.io-client";
const Item = ({ clientName, clientRUT, campaign ,check}) => {


 // Obtener el stock de premios y premios desde el hook useStockPremios y usePremios respectiva
 const awards = campaign.awards;
 const checks = campaign.checks;
 const scope  = campaign.scope;

//  console.log("-----------------------")
//  console.log(checks, " checks campaña")
console.log(awards, "Premios  campaña")
//  console.log(check,  "check Participante seleccionado")


 

    const formatearRUT = (rut) => {
    const cleanRut = rut.replace(/\D/g, '');
    const cuerpo = cleanRut.slice(0, -1);
    const dv = cleanRut.slice(-1);

    let cuerpoFormateado = '';
    let i = 0;

    for (let j = cuerpo.length - 1; j >= 0; j--) {
      cuerpoFormateado = cuerpo[j] + cuerpoFormateado;
      i++;
      if (i % 3 === 0 && j !== 0) cuerpoFormateado = '.' + cuerpoFormateado;
    }

    return `${cuerpoFormateado}-${dv}`;
  };



  return (

    <div className={styles['item-box']}>
      <div className={styles['item-info']}>
        <h2 className={styles['item-info-title']}>Estado del participante</h2>
        <div className={styles['item-name-container']}>
          <h2 className={styles['label-nombre']}>Nombre</h2>
          <p className={styles['item-name']}>{clientName}</p>
        </div>

        <div className={styles['item-column-container']}>
          <h2 className={styles['label-rut']}>RUT</h2>
          <p className={styles['item-rut']}>{formatearRUT(clientRUT)}</p>
        </div>
      </div>

      <div className={styles['item-status']}>
        <h2 className={styles['item-status-title']}>Premios por ganar</h2>
        <div className={styles.status}>
          
  


            {awards.map((premio, index) => {
          
    

            return (
              <Boleto
                key={index}
                scope={scope}
                check={check}
                checksCampaign={checks}
                idPremio={premio.awardId}
                img={premio.awardImage}
                title={premio.awardName}
                description={premio.awardDescription}
                note="Válido hasta agotar stock"
                status={premio.status}
               // codeCupon={premio?.codeCupon}
                qr={premio?.qr}
                clientName={clientName}
                clientRUT={clientRUT}
              />
            );
          })}

          
     
      
         
        </div>
      </div>
    </div>
  );
};

export default Item;
