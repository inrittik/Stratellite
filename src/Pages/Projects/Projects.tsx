import { icons } from "../../utils/icons";
import { useState } from "react";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import NewProjects from "./Sections/NewProjects";
import ActiveProjects from "./Sections/ActiveProjects";
import InProgress from "./Sections/InProgress";
import Completed from "./Sections/Completed";
import Rejected from "./Sections/Rejected";
import DisputedProjects from "./Sections/DisputedProjects";

const sectionOptions = [
  {
    name: "New Project",
    id: 1,
  },
  {
    name: "Active",
    id: 2,
  },
  {
    name: "In Progress",
    id: 3,
  },
  {
    name: "Completed",
    id: 4,
  },
  {
    name: "Rejectedt",
    id: 5,
  },
  {
    name: "Disputed",
    id: 6,
  },
];

const Projects = () => {
  const [state, dispatch] = useGlobalContext();
  const [section, setSection] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-x-hidden w-full">
        <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] items-center mx-6 md:mx-12">
          <div
            className="p-4 px-5 border border-gray-300 rounded-lg md:hidden"
            onClick={() => navigate(-1)}
          >
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

        <div className="auto-cols-33% md:auto-cols-15% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:ml-10 h-fit">
          {sectionOptions.map((option) => {
            return (
              <a
                className={`ml-3 text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg cursor-pointer ${
                  section === option.id
                    ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                    : "border-b border-gray-500"
                }`}
                onClick={() => setSection(option.id)}
              >
                {option.name}
              </a>
            );
          })}
        </div>
        {section === 1 && <NewProjects />}
        {section === 2 && <ActiveProjects />}
        {section === 3 && <InProgress />}
        {section === 4 && <Completed />}
        {section === 5 && <Rejected />}
        {section === 6 && <DisputedProjects />}
      </div>
    </div>
  );
};

export default Projects;
