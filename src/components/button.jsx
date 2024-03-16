import React, { useState } from 'react';
import './DynamicTextBoxes.css'; // Import CSS file

const DynamicTextBoxes = () => {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, value: '' }]);
  const [sum, setSum] = useState(0);
  const [warning, setWarning] = useState('');

  // Function to handle adding a new textbox
  const handleAddTextBox = () => {
    const newTextBoxes = [...textBoxes];
    newTextBoxes.push({ id: Date.now(), value: '' });
    setTextBoxes(newTextBoxes);
  };

  // Function to handle deleting a textbox
  const handleDeleteTextBox = (id) => {
    const newTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(newTextBoxes);
    calculateSum(newTextBoxes);
  };

  // Function to handle changing the value of a textbox
  const handleTextBoxChange = (id, value) => {
    // Show warning if the input is not a number
    if (isNaN(value)) {
      setWarning('Please enter a valid number.');
    } else {
      setWarning('');
    }

    const newTextBoxes = textBoxes.map((textBox) =>
      textBox.id === id ? { ...textBox, value } : textBox
    );
    setTextBoxes(newTextBoxes);
    calculateSum(newTextBoxes);
  };

  // Function to calculate the sum of all textbox values
  const calculateSum = (textBoxes) => {
    let total = 0;
    textBoxes.forEach((textBox) => {
      const value = parseFloat(textBox.value);
      if (!isNaN(value)) {
        total += value;
      }
    });
    setSum(total);
  };

  return (
    <div className="dynamic-textboxes">
      <h2>Dynamic Textboxes</h2>
      <button onClick={handleAddTextBox}>Add Textbox</button>
      {textBoxes.map((textBox) => (
        <div key={textBox.id} className="textbox-container">
          <input
            type="text"
            value={textBox.value}
            onChange={(e) => handleTextBoxChange(textBox.id, e.target.value)}
            className="textbox"
          />
          <button onClick={() => handleDeleteTextBox(textBox.id)} className="delete-button">Delete</button>
        </div>
      ))}
      <p className="warning">{warning}</p>
      <p className="total">Total: {sum}</p>
    </div>
  );
};

export default DynamicTextBoxes;
