import GeneralDropDown from "../../../Components/GeneralDropDown";
import { icons } from "../../../utils/icons";
import { eventType } from "../../../data/calender";
import Meeting from "./Meeting";
import { useState } from "react";
import Reminder from "./Reminder";
const Events = () => {
  const [typeOfEvent, setTypeOfEvent] = useState(1);
  return (
    <div>
      <div className="my-3 text-gray-800 ml-3">Set up the event type</div>
      <div className="my-6 flex items-center justify-between mx-3">
        <div className="font-semibold">Set/Schedule a </div>
        <GeneralDropDown
          dropDownList={eventType}
          setSelected={setTypeOfEvent}
        />
      </div>

      {typeOfEvent === 1 && <Meeting />}
      {typeOfEvent === 2 && <Reminder />}
    </div>
  );
};

export default Events;