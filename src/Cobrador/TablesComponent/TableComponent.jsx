import React from 'react'
 import "./TableComponent.css";





const TableComponent = () => {


const Clientes = [
    { id: 1, nombre: 'John Doe', codigo: 'Promo123', estado: 'Activo', rut :  '12.345.678-9' },
    { id: 2, nombre: 'Jane Doe', codigo: 'Promo456', estado: 'Inactivo', rut: '9.876.532-1' },
    { id: 3, nombre: 'Jane Doe', codigo: 'Promo456', estado: 'Inactivo', rut: '9.876.532-1' },
    { id: 4, nombre: 'Jane Doe', codigo: 'Promo456', estado: 'Inactivo', rut: '9.876.532-1' },
    { id: 5, nombre: 'Jane Doe', codigo: 'Promo456', estado: 'Inactivo', rut: '9.876.532-1' },
    { id: 6, nombre: 'Jane Doe', codigo: 'Promo456', estado: 'Inactivo', rut: '9.876.532-1' },
    { id: 7, nombre: 'Jane Doe', codigo: 'Promo456', estado: 'Inactivo', rut: '9.876.532-1' },
];


  return (
    <table className=''>    
        <thead>
            <tr>
                <th>Id del cliente</th>
                <th>Nombre</th>
                <th>RUT</th>
                <th>Telefono</th>
                <th>verificado</th>
                <th>premio</th>
            </tr>
        </thead>
        <tbody>


          {Clientes.map((cliente) => (



            <tr key={cliente.id}>   
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.codigo}</td>
              <td>{cliente.estado}</td>
              <td id={cliente.rut}>{cliente.rut}</td>
            </tr>
          ))}


        </tbody>
    </table>


    

  );    
}

export default TableComponent;