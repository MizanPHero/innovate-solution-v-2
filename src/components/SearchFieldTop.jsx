import { useState } from "react";
import downArrow from "../assets/down-arrow.svg";
import RadioButton from "./RadioButton";

const SearchFieldTop = () => {

    const [selectedOption, setSelectedOption] = useState('flight');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const options = [
        { id: "hotel", value: "hotel", label: "Hotel" },
        { id: "flight", value: "flight", label: "Flight" },
        { id: "transfer", value: "transfer", label: "Transfer" },
    ];


    console.log(selectedOption);

    return (
        <div className='container'>
            <div className='px-10 pt-7 pb-[18px]'>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className='flex gap-8'>
                        {options.map((option) => (
                            <RadioButton
                                key={option.id}
                                {...option}
                                selectedOption={selectedOption}
                                onChange={handleOptionChange}
                            />
                        ))}
                    </div>

                    <div className="flex gap-8 mt-4 sm:mt-0">
                        <div className="flex w-24 relative">
                            <select className="appearance-none px-1 w-full outline-primaryBlue font-normal text-sm text-[#303030]">
                                <option>Any Flight</option>
                                <option>Premium Flight</option>
                                <option>Business Flight</option>
                            </select>
                            <img src={downArrow} className="pointer-events-none absolute inset-y-2 right-0 ml-3 flex items-center pr-2 z-50"/>
                        </div>
                        <div className="flex w-28 relative">
                            <select className="appearance-none px-1 w-full outline-primaryBlue font-normal text-sm text-[#303030]">
                                <option>Any Baggage</option>
                                <option>Premium Baggage</option>
                                <option>Business Baggage</option>
                            </select>
                            <img src={downArrow} className="pointer-events-none absolute inset-y-2 right-0 ml-3 flex items-center pr-2 z-50"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFieldTop;