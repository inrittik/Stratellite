import GeneralDropDown from "../../../Components/GeneralDropDown";
import { icons } from "../../../utils/icons";
import { eventType, colorPalete } from "../../../data/calender";
const Events = () => {
  return (
    <div>
      <div className="my-3 text-gray-800 ml-3">Set up the event type</div>
      <div className="my-6 flex items-center justify-between mx-3">
        <div className="font-semibold">Set/Schedule a </div>
        <GeneralDropDown dropDownList={eventType} />
      </div>
      <div className="border border-slate-300 flex items-center my-3 mx-3">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder={`Add Title`}
        />
      </div>
      <div className="my-6 flex justify-between items-center font-semibold mx-3">
        <div className="">Date and time of event </div>
        <div className="border p-3 border-gray-500 rounded flex justify-between items-center">
          <div className="text-xssm mr-3">11th July, 2022</div>
          {icons.Calender.calender}
        </div>
      </div>

      {/* color picker, etc */}
      <div className="flex mx-3 justify-between items-center">
        <div className="border font-semibold border-gray-500 w-36 p-3 rounded">
          6:00 pm
        </div>
        <div className="border font-semibold border-gray-500 w-36 p-3 rounded">
          8:00 pm
        </div>
        <div className="border p-3 border-gray-500 rounded flex justify-between items-center">
          <div className="text-gray-700 mr-3">{icons.Calender.plus}</div>
          <span>Add Tag</span>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-1">
          {colorPalete.map((color) => {
            return (
              <div
                className={`h-8 w-12 rounded bg-[${color}] cursor-pointer`}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="my-6 mx-3">
        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          className="border border-slate-300 focus:outline-none rounded my-3 p-5 text-sm  placeholder-gray-700 text-gray-700 w-full"
          placeholder="Add a description"
        ></textarea>
      </div>
      <div className="my-6 flex justify-between items-center font-semibold mx-3">
        <div>Add people</div>
        <div className="border p-3 border-gray-500 rounded flex justify-between items-center">
          <div className="text-sky-400 mr-3">{icons.Calender.plus}</div>
          <span>ADD</span>
        </div>
      </div>
      <div className="flex my-6 mx-3">
        <button className="w-32 border border-sky-400 rounded text-sky-400 py-3 mr-3">
          Discard
        </button>
        <button className="w-32 border border-sky-400 rounded text-white bg-sky-400 py-3">
          Save
        </button>
      </div>
    </div>
  );
};

export default Events;
