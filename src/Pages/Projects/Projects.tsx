import { icons } from "../../utils/icons";
import { useState } from "react";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import NewProjectCard from "./NewProjectCard";
import ActiveProjectCard from "./ActiveProjectCard";

const Projects = () => {
  const [state, dispatch] = useGlobalContext();
  const [section, setSection] = useState(1);
  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-y-auto overflow-x-hidden w-full">
        <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] items-center mx-6 md:mx-12">
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
        <div className="text-2xl md:text-28 font-medium mb-4 my-6 mx-6 md:mx-12">
          Your Projects
        </div>
        <div className="hidden md:block text-base md:text-lg text-gray-600 mb-6 mx-6 md:mx-12">
          Here is a list of all the projects you have been working on.
        </div>
        <div className="auto-cols-35% md:auto-cols-15% grid grid-flow-col grid-cols overflow-auto scrollbar-hide mb-5 ml-5 md:ml-10">
          <a
            href="#"
            className={`ml-3 text-gray-800 text-center py-3 text-base md:text-sm rounded-t-lg ${
              section === 1
                ? "border-b-4 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(1)}
          >
            New Project
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-3 text-base md:text-sm  ${
              section === 2
                ? "border-b-4 border-sky-400 text-black font-semibold"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(2)}
          >
            Active
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-3 text-base md:text-sm  ${
              section === 3
                ? "border-b-4 border-sky-400 text-black font-semibold"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(3)}
          >
            In Progress
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-3 text-base md:text-sm  ${
              section === 4
                ? "border-b-4 border-sky-400 text-black font-semibold"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(4)}
          >
            Completed
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-3 text-base md:text-sm  ${
              section === 5
                ? "border-b-4 border-sky-400 text-black font-semibold"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(5)}
          >
            Rejected
          </a>
          <a
            href="#"
            className={`text-gray-800 text-center py-3 text-base md:text-sm ${
              section === 6
                ? "border-b-4 border-sky-400 text-black font-semibold"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSection(6)}
          >
            Disputed
          </a>
        </div>
        <div className="mx-6 md:mx-12 w-100">
          <ActiveProjectCard />
          <NewProjectCard />
          <NewProjectCard />
          <NewProjectCard />
          <NewProjectCard />
          <NewProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
