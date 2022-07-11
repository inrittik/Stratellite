import { icons } from "../utils/icons";
import { useGlobalContext } from "../Contexts/GlobalContext";
import BackButton from "./BackButton";

const ProjectsSearchBar = () => {
  const [state, dispatch] = useGlobalContext();
  return (
    <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] items-center mx-6 md:ml-12">
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
      <div className="hidden md:flex w-[23rem] h-32.5 items-center p-8 ml-5 ">
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
  );
};

export default ProjectsSearchBar;
