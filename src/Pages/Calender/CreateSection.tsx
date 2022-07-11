import React, { useState } from "react";
import { icons } from "../../utils/icons";

const sectionOptions = [
  {
    name: "Events",
    id: 1,
  },
  {
    name: "Invites",
    id: 2,
  },
  {
    name: "Request Status",
    id: 3,
  },
];

interface CreateSectionProps {
  setsidebarActive: any;
}

const CreateSection: React.FC<CreateSectionProps> = ({ setsidebarActive }) => {
  const [section, setSection] = useState(1);
  return (
    <div className="border rounded border-gray-500">
      <div className="flex justify-between w-full">
        <div className="auto-cols-33% md:auto-cols-20% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 w-full h-fit border-b border-gray-500">
          {sectionOptions.map((option) => {
            return (
              <a
                className={`ml-3 text-gray-600 text-center py-3 pt-5 text-base font-semibold md:text-sm rounded-t-lg cursor-pointer ${
                  section === option.id
                    ? "border-b-6 border-sky-400 text-black bg-neutral-50"
                    : ""
                }`}
                onClick={() => setSection(option.id)}
              >
                {option.name}
              </a>
            );
          })}
        </div>
        <span
          className="border border-gray-500 p-1 rounded cursor-pointer h-fit m-2"
          onClick={() => setsidebarActive(true)}
        >
          {icons.Projects.crosBlack}
        </span>
      </div>

      <div className="my-3 text-gray-800 ml-3">Set up the event type</div>
      <div className="my-6 flex -justify-between font-semibold ml-3">
        Set/Schedule a{" "}
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
      <div></div>

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

export default CreateSection;
