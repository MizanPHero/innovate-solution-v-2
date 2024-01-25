import React from 'react';

const AgeSelectionInfant = ({ index, age, onChange }) => {

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
                <option value="2">1 year old</option>
                <option value="1">Below 1 year</option>
            </select>
        </div>
    );
};

export default AgeSelectionInfant;