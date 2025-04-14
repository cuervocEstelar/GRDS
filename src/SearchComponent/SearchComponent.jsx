import React, { useState } from 'react';
import "./SearchComponent.css";

import highlightRow from './../helpers/highlightRow';
const SearchComponent = () => {

    const [searchValue, setSearchValue] = useState(""); // Estado para almacenar el valor de búsqueda

    const handleInputChange = (event) => {
        setSearchValue(event.target.value); // Guardar el valor en el estado
    };

    const handleSearch = () => {

        console.log("Buscando:", searchValue); // Aquí puedes hacer la búsqueda
        highlightRow(searchValue)

    };

    return (
        <>
            <div className="search-container">
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Buscar..."
                    className="search-input"
                    onChange={handleInputChange} // Actualiza el estado
                    value={searchValue} // Mantiene el valor en el input
                />
                <button type="button" onClick={handleSearch}>Search</button>
            </div>
        </>
    );
};

export default SearchComponent;
