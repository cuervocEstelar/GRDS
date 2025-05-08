import React, { useEffect } from 'react';
import styles from './Item.module.css';
import Boleto from './Boleto';
import useStockPremios from './../Hooks/useStockPremios';
import usePremios from './../Hooks/usePremios';
import { io } from "socket.io-client";
const Item = ({ clientName, clientRUT, campaign ,check}) => {


 // Obtener el stock de premios y premios desde el hook useStockPremios y usePremios respectiva
 const awards = campaign.awards;
 const checks = campaign.checks;
//  console.log(checks, " checks campaña")
//  console.log(check,  "check Participante seleccionado")
//  console.log(awards, "Premios  campaña")

  const { stockPremios, loading: loadingStock, error: errorStock } = useStockPremios();
  const { premios, loading: loadingPremios, error: errorPremios } = usePremios();

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

  // Manejo de carga y error
  if (loadingStock || loadingPremios) {
    return <p className={styles['loading']}>Cargando premios...</p>;
  }

  if (errorStock || errorPremios) {
    return <p className={styles['error']}>Error al cargar los datos.</p>;
  }

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
          
          {/* {premios.map((premio, index) => {
            const stock = stockPremios.find(
              (s) => s.title === premio.title || s.id === premio.id
            ); */}


            {awards.map((premio, index) => {
          
              
            return (
              <Boleto
                key={index}
                check={check}
                checksCampaign={checks}
                idPremio={premio.awardId}
                img={premio.awardImage}
                title={premio.awardName}
                description={premio.awardDescription}
                note="Válido hasta agotar stock"
                status={premio.status}
                codeCupon={premio?.codeCupon}
                qr={premio?.qr}
                clientName={clientName}
                clientRUT={clientRUT}
              />
            );
          })}

          
               {/* <Boleto
               key={index}
               img={premio.icon}
               title={premio.title}
               description={premio.description}
               note="Válido hasta agotar stock"
               status={stock.status}
               codeCupon={stock?.codeCupon}
               qr={stock?.qr}
               clientName={clientName}
               clientRUT={clientRUT}
             /> */}
      
         
        </div>
      </div>
    </div>
  );
};

export default Item;
