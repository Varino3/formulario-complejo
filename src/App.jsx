import React, { useState } from "react";
import Form from "./components/Form";
import MostrarDatos from "./components/MostrarDatos";
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    selectedItems: [],
    email: "",
    age: 0,
    option: "none",
    subOption1: "A",
    subOption2: "X",
  });

  const [showData, setShowData] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowData(true);
  };

  const handleReset = () => {
    setShowData(false);
  };

  return (
    <div>
      {!showData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <MostrarDatos formData={formData} />
          <button onClick={handleReset}>Volver al formulario</button>
        </div>
      )}
    </div>
  );
}

export default App;
