import React, { useState } from "react";
import { icons } from "../utils/icons";

const Calender = () => {
  const months = [
    "Januray",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [activeMonth, setActiveMonth] = useState("February");
  const [activeYear, setActiveYear] = useState(2021);

  const handlePreviousClick = () => {
    let newMonth = activeMonth;
    let newYear = activeYear;
    months.forEach((month, index) => {
      if (month === activeMonth && index > 0) {
        newMonth = months[index - 1];
      } else if (month === activeMonth && index === 0) {
        newMonth = months[11];
        newYear--;
      }
    });
    setActiveMonth(newMonth);
    setActiveYear(newYear);
  };

  const handleNextClick = () => {
    let newMonth = activeMonth;
    let newYear = activeYear;
    months.forEach((month, index) => {
      if (month === activeMonth && index < 11) {
        newMonth = months[index + 1];
      } else if (month === activeMonth && index === 11) {
        newMonth = months[0];
        newYear++;
      }
    });
    setActiveMonth(newMonth);
    setActiveYear(newYear);
  };
  return (
    <div className="border border-gray-500 rounded flex flex-col p-3">
      {/* top section */}
      <div className="flex items-center justify-between">
        <div className="flex text-28 items-center font-semibold p-3">
          <span className="w-56">
            {activeMonth}&nbsp;{activeYear}
          </span>
          <div className="flex flex-col ml-8 justify-between h-[1.5rem]">
            <span className="cursor-pointer" onClick={handleNextClick}>
              {icons.arrowUp}
            </span>
            <span className="cursor-pointer" onClick={handlePreviousClick}>
              {icons.arrowDown}
            </span>
          </div>
        </div>

        <div className="rounded-md text-white bg-sky-400 py-3 px-4 flex cursor-pointer items-center">
          <div className="text-white text-sm font-semibold">Create</div>
          <div className="ml-4">{icons.plusWhite}</div>
        </div>
      </div>

      {/* dates */}
      <div></div>

      {/* bottom section */}
      <div className="flex p-3">
        <div className="flex items-center font-semibold w-32">
          <div className="h-2.125 w-2.125 aspect-square bg-green-400 rounded-full mr-2 md:mr-0"></div>
          <div className="ml-3">Event dates</div>
        </div>
        <div className="flex items-center font-semibold">
          <div className="h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full mr-2 md:mr-0"></div>
          <div className="ml-3">Selected date</div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
