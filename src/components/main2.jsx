import React, { useState } from 'react';

function Input2() {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Options, setDropdown2Options] = useState([]);

  const handleDropdown1Change = (event) => {
    const selectedValue = event.target.value;

    let updatedOptions = [];

    if (selectedValue === 'Pilihan1') {
      updatedOptions = ['Opsi1A', 'Opsi1B', 'Opsi1C'];
    } else if (selectedValue === 'Pilihan2') {
      updatedOptions = ['Opsi2A', 'Opsi2B'];
    }

    setDropdown1Value(selectedValue);
    setDropdown2Options(updatedOptions);
  };

  return (
    <div>
      <h1>Dropdown Terkait</h1>
      <label>Pilihan 1:</label>
      <select onChange={handleDropdown1Change}>
        <option value="">Pilih...</option>
        <option value="Pilihan1">Pilihan 1</option>
        <option value="Pilihan2">Pilihan 2</option>
      </select>

      <br />

      <label>Pilihan 2:</label>
      <select>
        <option value="">Pilih...</option>
        {dropdown2Options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

