import React, { useState } from "react";

function Form({ onSubmit }) {
    const [formData, setFormData] = useState({
        selectedItems: [],
        email: "",
        age: 0,
        option: "none",
        subOption1: "A",
        subOption2: "X",
    });

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

    const handleOptionChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>FORMULARIO</h1>
            <div>
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
    );
}

export default Form;
