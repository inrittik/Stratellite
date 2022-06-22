import { icons } from "../../../utils/icons";
import { useState } from "react";
import cx from "classnames";
import { useGlobalContext } from "../../../Contexts/GlobalContext";
import ProjectInfo from "../Sections/ProjectInfo";
import ManagerInfo from "../Sections/ManagerInfo";
import Bidding from "../Sections/Bidding";

interface ActiveProjects {
  status: string;
}

const ActiveProjects: React.FC<ActiveProjects> = ({ status }) => {
  const [state, dispatch] = useGlobalContext();
  const [section, setSection] = useState(2);
  const [subsection, setSubsection] = useState(1);
  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-x-hidden w-full">
        <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] items-center mx-6 md:mx-12">
          <div className="p-4 px-5 border border-gray-300 rounded-lg md:hidden">
            {icons.Projects.back}
          </div>
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
            ></img>
            <div className="flex flex-col justify-between">
              <div className="font-medium text-1.5xl mb-2">Oliver Smith</div>
              <div className="text-xssm">Vendor</div>
            </div>
            <div className="ml-12">{icons.arrowRight}</div>
          </div>
        </div>
        <div className="flex items-center justify-between mx-6 md:mx-12">
          <div>
            <div className="text-2xl md:text-28 font-medium mb-4 my-6">
              Your Projects
              <span className="text-gray-600 font-normal md:hidden">
                /Active
              </span>
            </div>
            <div className="hidden md:block text-base md:text-lg text-gray-600 mb-6">
              Here is a list of all the projects you have been working on.
            </div>
          </div>
          <div className={`hidden gap-4 ${section === 1 ? "" : "md:flex"}`}>
            <div className="h-10 items-center gap-3 px-6 flex border border-gray-300 rounded-md cursor-pointer">
              <div className="text-black text-sm">Filter</div>
              {icons.filter}
            </div>
            <div className="h-10 w-10 justify-center items-center flex border border-gray-300 rounded-md cursor-pointer">
              {icons.threeDots}
            </div>
          </div>
        </div>

        <div className="hidden auto-cols-33% md:auto-cols-15% md:grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:ml-10 h-fit">
          <a
            href="#"
            className={`ml-3 text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              section === 1
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(1)}
          >
            New Project
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              section === 2
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(2)}
          >
            Active
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              section === 3
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(3)}
          >
            In Progress
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              section === 4
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(4)}
          >
            Completed
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              section === 5
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(5)}
          >
            Rejected
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              section === 6
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(6)}
          >
            Disputed
          </a>
        </div>
      </div>

      {/* landing section */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* main section */}
        {subsection === 1 && <ProjectInfo status={status} />}
        {subsection === 2 && <ManagerInfo />}
        {subsection === 3 && <Bidding />}

        {/* toggles laptop view*/}
        <div className="hidden md:flex md:flex-col w-20 items-center ml-12">
          <div
            className={cx(
              "p-3 mb-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer",
              {
                "text-gray-100 border border-gray-500": subsection !== 1,
                "text-white bg-sky-400": subsection === 1,
                "": subsection === 1,
              }
            )}
            onClick={() => setSubsection(1)}
          >
            {icons.Projects.info}
          </div>
          <div
            className={cx(
              "p-3 mb-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer",
              {
                "text-gray-100 border border-gray-500": subsection !== 2,
                "text-white bg-sky-400": subsection === 2,
                "": subsection === 2,
              }
            )}
            onClick={() => setSubsection(2)}
          >
            {icons.Projects.manager}
          </div>
          <div
            className={cx(
              "p-3 mb-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer",
              {
                "text-gray-100 border border-gray-500": subsection !== 3,
                "text-white bg-sky-400": subsection === 3,
                "": subsection === 3,
              }
            )}
            onClick={() => setSubsection(3)}
          >
            {icons.Projects.price}
          </div>
          <div
            className={cx(
              "p-3 mb-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer",
              {
                "text-gray-100 border border-gray-500": subsection !== 4,
                "text-white bg-sky-400": subsection === 4,
                "": subsection === 4,
              }
            )}
            onClick={() => setSubsection(4)}
          >
            {icons.Projects.milestone}
          </div>
          <div
            className={cx(
              "p-3 mb-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer",
              {
                "text-gray-100 border border-gray-500": subsection !== 5,
                "text-white bg-sky-400": subsection === 5,
                "": subsection === 5,
              }
            )}
            onClick={() => setSubsection(5)}
          >
            {icons.Projects.share}
          </div>
          <div
            className={cx(
              "p-3 mb-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer",
              {
                "text-gray-100 border border-gray-500": subsection !== 6,
                "text-white bg-sky-400": subsection === 6,
                "": subsection === 6,
              }
            )}
            onClick={() => setSubsection(6)}
          >
            {icons.Projects.more}
          </div>
        </div>

        {/* toggles mobile view */}
        <div className="auto-cols-33% md:auto-cols-15% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-0 ml-5 md:ml-10 h-fit md:hidden">
          <a
            className={`ml-3 text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 1
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(1)}
          >
            Project Details
          </a>
          <a
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 2
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(2)}
          >
            Manager Info
          </a>
          <a
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 3
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(3)}
          >
            Bidding
          </a>
          <a
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 4
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(4)}
          >
            Milestone
          </a>
          <a
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 5
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(5)}
          >
            Feedback
          </a>
          <a
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 6
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(6)}
          >
            Images
          </a>
          <a
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 7
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(7)}
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;
