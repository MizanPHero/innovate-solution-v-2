import { useState } from "react";
import downArrow from "../assets/down-arrow.svg";
import roundTrip from "../assets/round-trip.png";
import switchIcon from "../assets/switch.png";
import RadioButton from "./RadioButton";
import MultiCity from "./SvgElements/MultiCity";
import OneWay from "./SvgElements/OneWay";

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
            <div className='mx-4 sm:mx-0 px-4 sm:px-10 pt-7 pb-[18px] shadow-custom rounded-[20px] sm:rounded-[30px] bg-[#fff] mt-10'>
                {/* top line elements */}
                {/* top line elements */}
                <div className="flex flex-col items-center justify-between sm:flex-row">
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
                        <div className="relative flex w-24">
                            <select className="appearance-none px-1 w-full outline-primaryBlue font-normal text-sm text-[#303030]">
                                <option>Any Flight</option>
                                <option>Premium Flight</option>
                                <option>Business Flight</option>
                            </select>
                            <img src={downArrow} className="absolute right-0 z-50 flex items-center pr-2 ml-3 pointer-events-none inset-y-2"/>
                        </div>
                        <div className="relative flex w-28">
                            <select className="appearance-none px-1 w-full outline-primaryBlue font-normal text-sm text-[#303030]">
                                <option>Any Baggage</option>
                                <option>Premium Baggage</option>
                                <option>Business Baggage</option>
                            </select>
                            <img src={downArrow} className="absolute right-0 z-50 flex items-center pr-2 ml-3 pointer-events-none inset-y-2"/>
                        </div>
                    </div>
                </div>
                {/* second line elements */}
                {/* second line elements */}
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:gap-[18px] justify-between w-full mt-6">
                    {/* left side tabs */}
                    <div className="flex flex-col w-full sm:w-auto items-center sm:items-start gap-2 pl-[14px] pr-[14px]  sm:pr-[2px] py-[8px] rounded-2xl  bg-primaryBlue">
                        <button className="flex items-center justify-center gap-2">
                            <OneWay/>
                            <span className="text-sm font-normal text-[#fff]">One-Way</span>
                        </button>
                        <button className="flex items-center bg-[#EAF4FF82] w-full sm:w-auto rounded-2xl mr-0 sm:mr-auto sm:-ml-3 px-3 py-[6px] justify-center gap-2">
                            <img src={roundTrip}/>
                            <span className="text-sm font-normal text-[#fff]">Round-Trip</span>
                        </button>
                        <button className="flex items-center justify-center gap-2">
                            <MultiCity/>
                            <span className="text-sm font-normal text-[#fff]">Multi-City</span>
                        </button>
                    </div>

                    {/* from and to element */}
                    <div className="flex">
                        <div className="flex border rounded-2xl border-fadeGray">
                            {/* First Child Div */}
                            <div className="my-4 ml-4 mr-3 sm:my-3 sm:ml-5 sm:mr-11 ">
                                <div>
                                    <p className="font-normal text-[15px] text-lightDark">From</p>
                                    <p className="text-lg font-medium text-deepDark">Jakarta</p>
                                    <p className="font-normal text-[15px] text-lightDark">Soekarno-Hatta Airport</p>
                                </div>
                            </div>

                            {/* Separator */}
                            <div className="relative mx-2 border-r border-fadeGray">
                                <button className="absolute hidden sm:flex border border-fadeGray top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-[#fff]">
                                    <img src={switchIcon}/>
                                </button>
                            </div>

                            {/* Second Child Div */}
                            <div className="my-4 ml-3 mr-2 sm:ml-12 sm:mr-7 ">
                                <div>
                                    <p className="font-normal text-[15px] text-lightDark">To</p>
                                    <p className="text-lg font-medium text-deepDark">Jakarta</p>
                                    <p className="font-normal text-[15px] text-lightDark">Soekarno-Hatta Airport</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* depart and return element */}
                    <div className="flex">
                        <div className="flex border rounded-2xl border-fadeGray">
                            {/* First Child Div */}
                            <div className="flex flex-col items-center mx-5 my-3">
                                <div>
                                    <p className="font-normal text-[13px] text-lightDark">Depart</p>
                                    <p className="text-lg font-medium text-deepDark">4 January 2024</p>
                                    <p className="font-normal text-[13px] text-lightDark">Sunday</p>
                                </div>
                            </div>

                            {/* Separator */}
                            <div className="mx-2 border-r border-fadeGray"></div>

                            {/* Second Child Div */}
                            <div className="flex flex-col items-center m-4">
                                <div>
                                    <p className="font-normal text-[13px] text-lightDark">Return</p>
                                    <p className="text-lg font-medium text-deepDark">4 January 2024</p>
                                    <p className="font-normal text-[13px] text-lightDark">Sunday</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* passenger element */}

                    <div className="flex w-full sm:w-auto">
                        <div className="flex w-full border rounded-2xl border-fadeGray">
                            <div className="flex flex-col items-center m-4 mr-14">
                                <div>
                                    <p className="font-normal text-[13px] text-lightDark">Passengers</p>
                                    <p className="text-lg font-medium text-deepDark">1 Guest</p>
                                    <p className="font-normal text-[13px] text-lightDark">Economy Class</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    
                </div>
                {/* third line elements */}
                {/* third line elements */}
                <div className="flex justify-center mt-5">
                    <button className="text-[#fff] px-[66px] py-[13px] rounded-3xl bg-primaryBlue hover:bg-[#2b8fff]">Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchFieldTop;