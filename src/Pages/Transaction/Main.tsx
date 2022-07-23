import { useGlobalContext } from "../../Contexts/GlobalContext";
import BackButton from "../../Components/BackButton";
import { icons } from "../../utils/icons";
import { useState } from "react";
import AllTransactions from "./sections/AllTransactions";
import Invoices from "./sections/Invoices";

const sectionOptions = [
  {
    name: "All Transactions",
    id: 1,
  },
  {
    name: "Invoices",
    id: 2,
  },
];

const Main = () => {
  const [state, dispatch] = useGlobalContext();
  const [section, setSection] = useState(1);

  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-x-hidden w-full">
        <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] items-center mx-6 md:mx-12">
          <BackButton />
          <div className=" md:h-18 h-14 rounded-md flex pl-8 items-center py-6 gap-7 bg-gray-400 w-3/4">
            {icons.search}
            <input
              className=" w-full bg-transparent text-gray-200 text-base border-none outline-none"
              placeholder="Search for projects"
            ></input>
          </div>
          <div
            onClick={() =>
              dispatch({ setState: { showSidebar: !state.showSidebar } })
            }
            className="h-14 cursor-pointer rounded md:hidden aspect-square flex items-center justify-center border border-gray-300"
          >
            {icons.threeBars}
          </div>
          <div className="hidden md:flex w-1/3 h-32.5 items-center p-9 ml-5 ">
            <img
              className="h-16 w-16 rounded-full object-cover mr-5"
              src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
              alt=""
            ></img>
            <div className="flex flex-col justify-between">
              <div className="font-medium text-1.5xl mb-2">Oliver Smith</div>
              <div className="text-xssm">Vendor</div>
            </div>
            <div className="ml-12">{icons.arrowRight}</div>
          </div>
        </div>

        <div className="mx-6 md:mx-12">
          <div className="text-2xl md:text-28 font-medium mb-4 my-6">
            Transaction History
          </div>
        </div>

        <div className="auto-cols-33% md:auto-cols-33% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:mx-12 h-fit border-b border-gray-500 w-1/2">
          {sectionOptions.map((option) => {
            return (
              <a
                className={`ml-3 text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg cursor-pointer ${
                  section === option.id
                    ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                    : ""
                }`}
                onClick={() => setSection(option.id)}
              >
                {option.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center mx-6 md:mx-12">
          <div className="flex items-center w-3/5">
            <div className="flex flex-col">
              <div className="text-gray-600 font-semibold mb-2">From Date</div>
              <div className="border border-gray-500 rounded p-3 flex items-center justify-between w-44">
                <span>July 1 2019</span>
                {icons.arrowDown}
              </div>
            </div>
            <span className="mx-3 relative top-4">-</span>
            <div className="flex flex-col">
              <div className="text-gray-600 font-semibold mb-2">To Date</div>
              <div className="border border-gray-500 rounded p-3 flex items-center justify-between w-44">
                <span>July 1 2019</span>
                {icons.arrowDown}
              </div>
            </div>
            <div className="bg-sky-400 text-white rounded p-3 w-40 flex items-center justify-center mx-6 relative top-[0.9rem]">
              Submit
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-gray-600 font-semibold mb-2">
              Quick Duration
            </div>
            <div className="border border-gray-500 rounded p-3 flex items-center justify-between w-44">
              <span className="text-gray-100">Select</span>
              {icons.arrowDown}
            </div>
          </div>
        </div>

        {section === 1 && <AllTransactions />}
        {section === 2 && <Invoices />}
      </div>
    </div>
  );
};

export default Main;
