const getElementById = (elementId) => {          
    const foundElement = document.getElementById(elementId);

    if (foundElement) {
        console.log(`Elemento con ID "${elementId}" encontrado.`);


    } else {
        console.log(`Elemento con ID "${elementId}" no encontrado.`);
    }

    return foundElement;
};

export default getElementById;
