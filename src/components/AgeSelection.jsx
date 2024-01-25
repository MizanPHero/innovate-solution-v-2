// AgeSelection.jsx
import React from 'react';

const AgeSelection = ({ index, age, onChange }) => {
  const handleAgeChange = (e) => {
    onChange(index, e.target.value);
  };

  return (
    <div className="">
      <select
        id={`childAge${index}`}
        name={`childAge${index}`}
        value={age}
        onChange={handleAgeChange}
        className="p-1 text-xs border rounded-md outline-none border-fadeGray focus:ring-2 focus:ring-primaryBlue"
      >
        <option value="12">12 years old</option>
        <option value="11">11 years old</option>
        <option value="10">10 years old</option>
      </select>
    </div>
  );
};

export default AgeSelection;
