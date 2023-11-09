import React from "react";
import './App.css'

function MostrarDatos({ formData }) {
    return (
        <div>
            <h2>Mostrar datos:</h2>
            <p>Videojuegos favoritos: {formData.selectedItems.join(", ")}</p>
            <p>Correo electrónico: {formData.email}</p>
            <p>Edad: {formData.age}</p>
            <p>PC o Consola: {formData.option}</p>
            {formData.option === "1" && (
                <p>Subopción PC: {formData.subOption1}</p>
            )}
            {formData.option === "2" && (
                <p>Subopción Consola: {formData.subOption2}</p>
            )}
        </div>
    );
}

export default MostrarDatos;
