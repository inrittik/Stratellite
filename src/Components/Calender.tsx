import { useState, useEffect } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";
import moment from "moment";
import buildCalender from "../utils/buildCalender";

const Calender = () => {
  const weeks = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
  const [calender, setCalendar] = useState<any>([]);
  const [value, setValue] = useState(moment());
  const [monthValue, setMonthValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalender(value));
  }, [value]);

  // set month name
  const activeMonthName = () => {
    return value.format("MMMM");
  };

  // set year
  const activeYearName = () => {
    return value.format("YYYY");
  };

  // handle month/year change to previous
  const handlePreviousClick = () => {
    setValue(value.clone().subtract(1, "month"));
    setMonthValue(monthValue.clone().subtract(1, "month"));
  };

  // handle month/year change to next
  const handleNextClick = () => {
    setValue(value.clone().add(1, "month"));
    setMonthValue(monthValue.clone().add(1, "month"));
  };

  // is active month === present month
  const isPresentMonth = (value: any) => {
    return value.isSame(new Date(), "month");
  };

  // is active month === current month
  const isCurrentMonth = (value: any) => {
    return value.isSame(monthValue, "month");
  };

  return (
    <div className="border border-gray-500 rounded flex flex-col p-3">
      {/* top section */}
      <div className="flex items-center justify-between mx-5">
        <div className="flex text-28 items-center font-semibold p-3">
          <span className="w-56">
            {activeMonthName()}&nbsp;{activeYearName()}
          </span>
          <div className="flex flex-col ml-4 justify-between h-[1.5rem]">
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

      {/* dates -> main calender*/}
      <div className="flex flex-col items-center justify-between mx-5">
        {/* week names */}
        <div className="flex flex-row justify-between text-center my-1 w-full">
          {weeks.map((weekday) => {
            return (
              <div className="flex justify-center items-center w-8 py-2 px-5 font-semibold rounded mx-2">
                {weekday}
              </div>
            );
          })}
        </div>
        {/* calender */}
        {calender.map((week: any) => {
          return (
            <div className="flex flex-row justify-between text-center my-1 w-full">
              {week.map((day: any) => {
                return (
                  <div
                    className={cx(
                      "flex justify-center items-center w-8 py-2 px-5 border border-gray-500 mx-2 cursor-pointer",
                      {
                        "border-sky-400":
                          value.isSame(day, "day") && isPresentMonth(value),
                        "text-gray-500": !isCurrentMonth(day),
                      }
                    )}
                  >
                    {day.format("D")}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* bottom section */}
      <div className="flex p-3 mx-5">
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
