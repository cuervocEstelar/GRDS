import React from 'react'
import TableComponent from '../TablesComponent/TableComponent';
import SearchComponent from '../SearchComponent/SearchComponent';
import "./Validator.css";
import TableParticipants from '../TableParticipants/TableParticipants';


  const ValidatorComponent = () => {
  return (
    <div className='validatorContainer' >
    <SearchComponent />
    {/* <TableComponent /> */}
    <TableParticipants />
    </div>
  )
}

export default ValidatorComponent;