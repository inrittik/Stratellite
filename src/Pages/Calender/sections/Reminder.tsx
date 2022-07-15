import React, { useState } from "react";
import ToggleSwitch from "../../../Components/ToggleSwitch";
import { icons } from "../../../utils/icons";

const Reminder = () => {
  const [toggleFieldAllDays, setToggleFieldAllDays] = useState(false);
  const [toggleFieldRepeat, setToggleFieldRepeat] = useState(true);
  return (
    <>
      <div className="border border-slate-300 flex items-center my-3 mx-3">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder={`Reminder me to`}
        />
      </div>
      <div className="my-6 flex justify-between items-center font-semibold mx-3">
        <div className="text-xs md:text-sm">All Days </div>
        <ToggleSwitch
          setMuteField={setToggleFieldAllDays}
          fieldValue={toggleFieldAllDays}
        />
      </div>

      <div className="flex mx-3 my-6">
        <div className="border p-3 border-gray-500 rounded flex justify-between items-center">
          <div className="text-xs md:text-sm mr-3">11th July, 2022</div>
          {icons.Calender.calender}
        </div>
        <div className="border font-semibold border-gray-500 w-36 p-3 rounded ml-3">
          6:00 pm
        </div>
      </div>

      <div className="my-6 flex justify-between items-center font-semibold mx-3">
        <div className="text-xs md:text-sm">Repeat </div>
        <ToggleSwitch
          setMuteField={setToggleFieldRepeat}
          fieldValue={toggleFieldRepeat}
        />
      </div>

      <div className="flex my-6 mx-3 text-sm">
        <button className="w-32 border border-sky-400 rounded text-sky-400 py-3 mr-3">
          Discard
        </button>
        <button className="w-32 border border-sky-400 rounded text-white bg-sky-400 py-3">
          Save
        </button>
      </div>
    </>
  );
};

export default Reminder;
