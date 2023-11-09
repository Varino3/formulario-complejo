import React, { useState } from "react";
import './App.css';

function Form() {
    const [formData, setFormData] = useState({
        selectedItems: [],
        email: "",
        age: 0,
        option: "none",
        subOption1: "A",
        subOption2: "X",
    });

    // Selector de múltiples elementos
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const updatedSelectedItems = [...formData.selectedItems];

        if (checked) {
            updatedSelectedItems.push(name);
        } else {
            const index = updatedSelectedItems.indexOf(name);
            if (index !== -1) {
                updatedSelectedItems.splice(index, 1);
            }
        }

        setFormData({ ...formData, selectedItems: updatedSelectedItems });
    };

    // Campo tipo número
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "age") {
            const ageValue = parseInt(value, 10);
            if (ageValue >= 0) {
                setFormData({ ...formData, [name]: ageValue });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Selector simple con subopciones
    const handleOptionChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Respuesta al pulsa el botón de enviar
    const handleSubmit = (e) => {
        e.preventDefault();
        // Mostrar el código por pantalla
        console.log(formData); //Prueba consola
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h1>FORMULARIO</h1>
                <div>
                    {/* Selector de múltiples elementos */}
                    <p>Selecciona tus videojuegos favoritos:</p>
                    <label>
                        <input
                            type="checkbox"
                            name="Counter Strike 2"
                            checked={formData.selectedItems.includes("Counter Strike 2")}
                            onChange={handleCheckboxChange}
                        />
                        Counter Strike 2
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="PlayerUnknown's Battlegrounds"
                            checked={formData.selectedItems.includes("PlayerUnknown's Battlegrounds")}
                            onChange={handleCheckboxChange}
                        />
                        PlayerUnknown's Battlegrounds
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="Elden Ring"
                            checked={formData.selectedItems.includes("Elden Ring")}
                            onChange={handleCheckboxChange}
                        />
                        Elden Ring
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="EA Sports FC 24"
                            checked={formData.selectedItems.includes("EA Sports FC 24")}
                            onChange={handleCheckboxChange}
                        />
                        EA Sports FC 24
                    </label>
                </div>
                <div>
                    {/* Campo tipo texto */}
                    <label htmlFor="email">Correo Electrónico: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    {/* Campo tipo número */}
                    <label htmlFor="age">Edad: </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    {/* Selector simple con subopciones */}
                    <label htmlFor="option">PC o Consola: </label>
                    <select
                        id="option"
                        name="option"
                        value={formData.option}
                        onChange={handleOptionChange}
                    >
                        <option value="none">Selecciona una opción</option>
                        <option value="1">PC</option>
                        <option value="2">Consola</option>
                    </select>
                </div>

                {/* Mostrar subselector 1 si se selecciona "Opción 1" */}
                {formData.option === "1" && (
                    <div>
                        <label htmlFor="subOption1">PC: </label>
                        <select
                            id="subOption1"
                            name="subOption1"
                            value={formData.subOption1}
                            onChange={handleOptionChange}
                        >
                            <option value="p0">Teclado y Ratón</option>
                            <option value="p1">Mando</option>
                        </select>
                    </div>
                )}
                {/* Mostrar subselector 2 si se selecciona "Opción 2" */}
                {formData.option === "2" && (
                    <div>
                        <label htmlFor="subOption2">Consola:</label>
                        <select
                            id="subOption2"
                            name="subOption2"
                            value={formData.subOption2}
                            onChange={handleOptionChange}
                        >
                            <option value="c0">PlayStation</option>
                            <option value="c1">Xbox</option>
                        </select>
                    </div>
                )}
                <div id="boton">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
