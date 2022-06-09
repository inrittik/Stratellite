import { icons } from "../../utils/icons";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [state, dispatch] = useGlobalContext();

  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-auto w-full mx-12">
        <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] items-center md:mx-0">
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
          <div className="hidden md:flex w-1/3 h-32.5 items-center p-9 ml-5">
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
        <div className="text-2xl md:text-28 font-medium mb-4 my-6">
          Your Projects
        </div>
        <div className="text-base md:text-lg text-gray-600 mb-6">
          Here is a list of all the projects you have been working on.
        </div>
        <div className="flex items-center justify-between overflow-auto md:overflow-visible px-3 my-3">
          <a href="#" className="w-1/3 mx-3">
            New Project
          </a>
          <a href="#" className="w-1/3 mx-3">
            Active
          </a>
          <a href="#" className="w-1/3 mx-3">
            In Progress
          </a>
          <a href="#" className="w-1/3 mx-3">
            Completed
          </a>
          <a href="#" className="w-1/3 mx-3">
            Rejected
          </a>
          <a href="#" className="w-1/3 mx-3">
            Disputed
          </a>
        </div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
