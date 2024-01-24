import { useState } from "react";
import downArrow from "../assets/down-arrow.svg";
import roundTrip from "../assets/round-trip.png";
import switchIcon from "../assets/switch.png";
import RadioButton from "./RadioButton";
import MultiCity from "./SvgElements/MultiCity";
import OneWay from "./SvgElements/OneWay";


// Calendar imports

import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { generateDate, months } from "../utils/calendar";
import cn from "../utils/cn";



const SearchFieldTop = () => {

    const [selectedOption, setSelectedOption] = useState('flight');
    const [isDepartDateMenu, setIsDepartDateMenu] = useState(false);
    const [isReturnDateMenu, setIsReturnDateMenu] = useState(false);


    //from destination
    const [fromSelectedOption, setFromSelectedOption] = useState(null);
    const [isFromOpen, setIsFromOpen] = useState(false);
    const handleFromToggle = () => {
    setIsFromOpen(!isFromOpen);
    };
    const handleFromSelect = (name, airport) => {
    const selectedOption = {
        name: name,
        airport: airport,
    };
    setFromSelectedOption(selectedOption);
    setIsFromOpen(false);
    };

    //to destination
    const [toSelectedOption, setToSelectedOption] = useState(null);
    const [isToOpen, setIsToOpen] = useState(false);
    const handleToToggle = () => {
    setIsToOpen(!isToOpen);
    };
    const handleToSelect = (name, airport) => {
    const selectedOption = {
        name: name,
        airport: airport,
    };
    setToSelectedOption(selectedOption);
    // logic or callback if needed
    setIsToOpen(false); 
    };


    //destination value exchange
    const handleDestinationExchange = () => {
        const tempFromOption = { ...fromSelectedOption };
        setFromSelectedOption({ ...toSelectedOption });
        setToSelectedOption(tempFromOption);
      };



    // calendar
    const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDepartDate, setSelectDepartDate] = useState(currentDate);
	const [selectReturnDate, setSelectReturnDate] = useState(currentDate);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // for depart calendar
    const toggleDepartMenu = () => {
        setIsDepartDateMenu(!isDepartDateMenu);
    };

    const closeDepartMenu = () => {
        setIsDepartDateMenu(false);
    };
      
    // for return calendar

    const toggleReturnMenu = () => {
        setIsReturnDateMenu(!isReturnDateMenu);
    };

    const closeReturnMenu = () => {
        setIsReturnDateMenu(false);
    };


    //for radio
    const options = [
        { id: "hotel", value: "hotel", label: "Hotel" },
        { id: "flight", value: "flight", label: "Flight" },
        { id: "transfer", value: "transfer", label: "Transfer" },
    ];


    // console.log(selectDate.toDate().toDateString());

    const getFullDayName = (abbreviatedDay) => {
        const daysMap = {
            "Sun": "Sunday",
            "Mon": "Monday",
            "Tue": "Tuesday",
            "Wed": "Wednesday",
            "Thu": "Thursday",
            "Fri": "Friday",
            "Sat": "Saturday"
        };
    
        return daysMap[abbreviatedDay] || abbreviatedDay;
    };
    
    
    const dateString = selectDepartDate.toDate().toDateString();
    const dateParts = dateString.split(' ');
    const abbreviatedDayOfWeek = dateParts[0]; 
    const fullDayOfWeek = getFullDayName(abbreviatedDayOfWeek);
    const formattedDateWithFullDay = `${selectDepartDate.format('D')} ${selectDepartDate.format('MMMM YYYY')}`;
    


    const dateStringReturn = selectReturnDate.toDate().toDateString();
    const datePartsReturn = dateStringReturn.split(' ');
    const abbreviatedDayOfWeekReturn = datePartsReturn[0]; 
    const fullDayOfWeekReturn = getFullDayName(abbreviatedDayOfWeekReturn);
    const formattedDateWithFullDayReturn = `${selectReturnDate.format('D')} ${selectReturnDate.format('MMMM YYYY')}`;




    // console.log(fromSelectedOption);
    // console.log(toSelectedOption);
    console.log(selectDepartDate);
    console.log(selectReturnDate);





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
                    <div className="flex flex-col w-full sm:w-[125px] items-center sm:items-start gap-2 pl-[14px] pr-[14px]  sm:pr-[2px] py-[8px] rounded-2xl  bg-primaryBlue">
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
                    <div className="flex w-auto sm:w-[463px]">
                        <div className="relative flex justify-between w-full border rounded-2xl border-fadeGray">
                            {/* First Child Div */}
                            {/* From */}
                            {/* <div className="my-4 ml-4 mr-3 sm:my-3 sm:ml-5 sm:mr-11 ">
                                <div>
                                    <p className="font-normal text-[15px] text-lightDark">From</p>
                                    <p className="text-lg font-medium text-deepDark">Jakarta</p>
                                    <p className="font-normal text-[15px] text-lightDark">Soekarno-Hatta Airport</p>
                                </div>
                            </div> */}
                                
                            <button
                                type="button"
                                className="w-full my-4 ml-4 mr-3 sm:my-3 sm:ml-7 sm:mr-7"
                                id="menu-button"
                                aria-expanded={isFromOpen}
                                aria-haspopup="true"
                                onClick={handleFromToggle}
                            >
                                <div className="text-left">
                                    <p className="font-normal text-[15px] text-lightDark">From</p>
                                    <p className="text-lg font-medium text-deepDark">{fromSelectedOption?.name ? fromSelectedOption?.name : "Not Selected"}</p>
                                    <p className="font-normal text-[15px] text-lightDark">
                                        {fromSelectedOption?.airport
                                            ? fromSelectedOption.airport.length > 21
                                                ? `${fromSelectedOption.airport.slice(0, 21)}...`
                                                : fromSelectedOption.airport
                                            : "Select your destination"}
                                    </p>
                                </div>
                            </button>

                            {isFromOpen && (
                                <div
                                    className="absolute left-0 top-24 mt-2 z-50 origin-top-right bg-[#fff] rounded-md shadow-lg w-fit ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div className="py-1" role="none">
                                        <div
                                            className="px-4 py-2 rounded-md hover:bg-fadeGray hover:bg-opacity-70"
                                            onClick={() => handleFromSelect("Jakarta", "Soekarno-Hatta Airport")}
                                        >
                                            <h2 className="text-base font-medium text-deepDark">Jakarta</h2>
                                            <p className="text-sm font-normal text-lightDark">Soekarno-Hatta Airport</p>
                                        </div>
                                        <div
                                            className="px-4 py-2 rounded-md hover:bg-fadeGray hover:bg-opacity-40"
                                            onClick={() => handleFromSelect("Paris", "Charles de Gaulle Airport")}
                                        >
                                            <h2 className="text-base font-medium text-deepDark">Paris</h2>
                                            <p className="text-sm font-normal text-lightDark">Charles de Gaulle Airport</p>
                                        </div>
                                    </div>
                                </div>
                            )}



                            {/* Separator */}
                            <div className="relative mx-2 border-r border-fadeGray">
                                <button className="absolute hidden hover:bg-fadeGray sm:flex border border-fadeGray top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-[#fff]" onClick={handleDestinationExchange}>
                                    <img src={switchIcon}/>
                                </button>
                            </div>

                            {/* Second Child Div */}
                            {/* <div className="my-4 ml-3 mr-2 sm:ml-12 sm:mr-7 ">
                                <div>
                                    <p className="font-normal text-[15px] text-lightDark">To</p>
                                    <p className="text-lg font-medium text-deepDark">Jakarta</p>
                                    <p className="font-normal text-[15px] text-lightDark">Soekarno-Hatta Airport</p>
                                </div>
                            </div> */}

                            <button
                                type="button"
                                className="w-full my-4 ml-3 mr-2 sm:ml-7 sm:mr-7"
                                id="menu-button"
                                aria-expanded={isToOpen}
                                aria-haspopup="true"
                                onClick={handleToToggle}
                            >
                                <div className="text-left">
                                    <p className="font-normal text-[15px] text-lightDark">To</p>
                                    <p className="text-lg font-medium text-deepDark">{toSelectedOption?.name ? toSelectedOption?.name : "Not Selected"}</p>
                                    <p className="font-normal text-[15px] text-lightDark">{toSelectedOption?.airport
                                        ? toSelectedOption.airport.length > 21
                                            ? `${toSelectedOption.airport.slice(0, 21)}...`
                                            : toSelectedOption.airport
                                        : "Select your destination"}</p>
                                </div>
                            </button>

                            {isToOpen && (
                                <div
                                    className="absolute right-0 top-24 z-50 origin-top-right bg-[#fff] rounded-md shadow-lg w-fit ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div className="py-1" role="none">
                                    <div
                                        className="px-4 py-2 rounded-md hover:bg-fadeGray hover:bg-opacity-70"
                                        onClick={() => handleToSelect("Jakarta", "Soekarno-Hatta Airport")}
                                    >
                                        <h2 className="text-base font-medium text-deepDark">Jakarta</h2>
                                        <p className="text-sm font-normal text-lightDark">Soekarno-Hatta Airport</p>
                                    </div>
                                    <div
                                        className="px-4 py-2 rounded-md hover:bg-fadeGray hover:bg-opacity-40"
                                        onClick={() => handleToSelect("Paris", "Charles de Gaulle Airport")}
                                    >
                                        <h2 className="text-base font-medium text-deepDark">Paris</h2>
                                        <p className="text-sm font-normal text-lightDark">Charles de Gaulle Airport</p>
                                    </div>
                                    </div>
                                </div>
                                )}


                        </div>
                    </div>

                    {/* depart and return element */}
                    <div className="flex w-auto sm:w-[351px]">
                        <div className="relative flex w-full border rounded-2xl border-fadeGray">
                            {/* First Child Div */}
                            {/* Depart element */}
                            <button className="flex flex-col items-center w-full m-4" id="menu-button"
                                aria-expanded={isDepartDateMenu}
                                aria-haspopup="true"
                                onClick={toggleDepartMenu}>
                                <div className="text-left">
                                    <p className="font-normal text-[13px] text-lightDark">Depart</p>
                                    <p className="text-lg font-medium text-deepDark">{formattedDateWithFullDay}</p>
                                    <p className="font-normal text-[13px] text-lightDark">{fullDayOfWeek}</p>
                                </div>
                            </button>

                            {isDepartDateMenu && (
                                <div
                                    className="absolute top-28 sm:top-24 -right-[30px] sm:right-0 z-50 py-6 mt-2 origin-top-right bg-[#fff] rounded-md shadow-lg ring-1 ring-[#000] ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div className="px-0 py-1" role="none">
                                        <div className="px-4 w-96 h-96">
                                            <div className="flex items-center justify-between">
                                                <h1 className="font-semibold select-none">
                                                    {months[today.month()]}, {today.year()}
                                                </h1>
                                                <div className="flex items-center gap-10 ">
                                                    <GrFormPrevious
                                                        className="w-5 h-5 transition-all cursor-pointer hover:scale-105"
                                                        onClick={() => {
                                                            setToday(today.month(today.month() - 1));
                                                        }}
                                                    />
                                                    <h1
                                                        className="transition-all cursor-pointer hover:scale-105"
                                                        onClick={() => {
                                                            setToday(currentDate);
                                                        }}
                                                    >
                                                        Today
                                                    </h1>
                                                    <GrFormNext
                                                        className="w-5 h-5 transition-all cursor-pointer hover:scale-105"
                                                        onClick={() => {
                                                            setToday(today.month(today.month() + 1));
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-7 ">
                                                {days.map((day, index) => {
                                                    return (
                                                        <h1
                                                            key={index}
                                                            className="grid text-sm text-center text-[#6b7280] select-none h-14 w-14 place-content-center"
                                                        >
                                                            {day}
                                                        </h1>
                                                    );
                                                })}
                                            </div>

                                            <div className="grid grid-cols-7 ">
                                                {generateDate(today.month(), today.year()).map(
                                                    ({ date, currentMonth, today }, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="grid p-2 text-sm text-center border-t h-14 place-content-center"
                                                            >
                                                                <h1
                                                                    className={cn(
                                                                        currentMonth ? "" : "text-[#9ca3af]",
                                                                        today
                                                                            ? "bg-[#dc2626] text-[#fff]"
                                                                            : "",
                                                                            selectDepartDate
                                                                            .toDate()
                                                                            .toDateString() ===
                                                                            date.toDate().toDateString()
                                                                            ? "bg-primaryBlue text-[#fff]"
                                                                            : "",
                                                                        "h-10 w-10 rounded-full grid place-content-center hover:bg-primaryBlue hover:text-[#fff] transition-all cursor-pointer select-none"
                                                                    )}
                                                                    onClick={() => {
                                                                        setSelectDepartDate(date);
                                                                        closeDepartMenu();
                                                                    }}
                                                                >
                                                                    {date.date()}
                                                                </h1>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {/* Separator */}
                            <div className="mx-2 border-r sm:mx-0 border-fadeGray"></div>

                            {/* Second Child Div */}
                            {/* Return Child Div */}
                            {/* <div className="flex flex-col items-center m-4">
                                <div>
                                    <p className="font-normal text-[13px] text-lightDark">Return</p>
                                    <p className="text-lg font-medium text-deepDark">4 January 2024</p>
                                    <p className="font-normal text-[13px] text-lightDark">Sunday</p>
                                </div>
                            </div> */}


                            <button className="flex flex-col items-center w-full m-4" id="return-menu-button"
                                aria-expanded={isReturnDateMenu}
                                aria-haspopup="true"
                                onClick={toggleReturnMenu}>
                                <div className="text-left">
                                    <p className="font-normal text-[13px] text-lightDark">Return</p>
                                    <p className="text-lg font-medium text-deepDark">{formattedDateWithFullDayReturn}</p>
                                    <p className="font-normal text-[13px] text-lightDark">{fullDayOfWeekReturn}</p>
                                </div>
                            </button>
                            {isReturnDateMenu && (
                                <div
                                    className="absolute top-28 sm:top-24 -right-[30px] sm:right-0 z-50 py-6 mt-2 origin-top-right bg-[#fff] rounded-md shadow-lg ring-1 ring-[#000] ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div className="px-0 py-1" role="none">
                                        <div className="px-4 w-96 h-96">
                                            <div className="flex items-center justify-between">
                                                <h1 className="font-semibold select-none">
                                                    {months[today.month()]}, {today.year()}
                                                </h1>
                                                <div className="flex items-center gap-10 ">
                                                    <GrFormPrevious
                                                        className="w-5 h-5 transition-all cursor-pointer hover:scale-105"
                                                        onClick={() => {
                                                            setToday(today.month(today.month() - 1));
                                                        }}
                                                    />
                                                    <h1
                                                        className="transition-all cursor-pointer hover:scale-105"
                                                        onClick={() => {
                                                            setToday(currentDate);
                                                        }}
                                                    >
                                                        Today
                                                    </h1>
                                                    <GrFormNext
                                                        className="w-5 h-5 transition-all cursor-pointer hover:scale-105"
                                                        onClick={() => {
                                                            setToday(today.month(today.month() + 1));
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-7 ">
                                                {days.map((day, index) => {
                                                    return (
                                                        <h1
                                                            key={index}
                                                            className="grid text-sm text-center text-[#6b7280] select-none h-14 w-14 place-content-center"
                                                        >
                                                            {day}
                                                        </h1>
                                                    );
                                                })}
                                            </div>

                                            <div className="grid grid-cols-7 ">
                                                {generateDate(today.month(), today.year()).map(
                                                    ({ date, currentMonth, today }, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="grid p-2 text-sm text-center border-t h-14 place-content-center"
                                                            >
                                                                <h1
                                                                    className={cn(
                                                                        currentMonth ? "" : "text-[#9ca3af]",
                                                                        today
                                                                            ? "bg-[#dc2626] text-[#fff]"
                                                                            : "",
                                                                            selectReturnDate
                                                                            .toDate()
                                                                            .toDateString() ===
                                                                            date.toDate().toDateString()
                                                                            ? "bg-primaryBlue text-[#fff]"
                                                                            : "",
                                                                        "h-10 w-10 rounded-full grid place-content-center hover:bg-primaryBlue hover:text-[#fff] transition-all cursor-pointer select-none"
                                                                    )}
                                                                    onClick={() => {
                                                                        setSelectReturnDate(date);
                                                                        closeReturnMenu();
                                                                    }}
                                                                >
                                                                    {date.date()}
                                                                </h1>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}


                        </div>
                    </div>



                    <div className="flex w-full sm:w-[177px]">
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