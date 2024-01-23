import React from 'react';

const RadioButton = ({ id, value, label, selectedOption, onChange }) => {
    return (
        <div className="flex items-center blue-radio">
    <input
      type="radio"
      id={id}
      name="travelOption"
      value={value}
      className="hidden"
      onChange={onChange}
      checked={selectedOption === value}
    />
    <label
      htmlFor={id}
      className={`flex items-center font-normal text-sm cursor-pointer ${
        selectedOption === value ? "text-primaryBlue" : "text-lightDark"
      }`}
    >
      <span className="inline-block w-[18px] h-[18px] border-[1.5px] border-fadeGray rounded-full mr-[11px]"></span>
      {label}
    </label>
  </div>
    );
};

export default RadioButton;