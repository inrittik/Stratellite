import { icons } from "../../../utils/icons";
import { useState } from "react";
import { useGlobalContext } from "../../../Contexts/GlobalContext";
import Proprty1 from "../../../assets/project/property1.png";
import Proprty2 from "../../../assets/project/property2.png";
import Proprty3 from "../../../assets/project/property3.png";

const ActiveProjects = () => {
  const [state, dispatch] = useGlobalContext();
  const [section, setSection] = useState(2);
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
        <div className="flex flex-col md:w-10/12 mt-6 md:mt-0 ml-6 md:ml-12 overflow-y-auto">
          <div className="flex md:hidden w-full mb-3 justify-between px-4 md:px-0">
            <div>
              <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
                Construction work in Delhi
              </div>
              <div className="text-xs md:text-sm text-gray-900">
                Delhi, India
              </div>
            </div>

            {/* status */}
            <div className=" flex items-center justify-evenly py-2 rounded-md bg-green-100 text-green-500 cursor-pointer text-sm w-32 md:w-36 text-center font-semibold md:text-xssm mx-3 md:mx-0">
              {icons.Projects.tick}
              Approved
            </div>
          </div>
          {/* image section */}
          <div className="auto-cols-55% md:auto-cols-33% gap-3 grid grid-flow-col grid-cols overflow-auto pb-4 mb-10">
            <img src={Proprty1} alt="" className="md:h-72 md:mx-4" />
            <img src={Proprty2} alt="" className="md:h-72 md:mx-4" />
            <img src={Proprty1} alt="" className="md:h-72 md:mx-4" />
          </div>

          <div className="text-green-500 mb-8 w-11/12">
            <span className="font-semibold">Note:-</span> A meeting will be set
            up by the manager soon to discuss the project details, and you will
            be notified.
          </div>
          {/* heading */}
          <div className="hidden md:flex w-full justify-between px-4 md:px-0">
            <div>
              <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
                Construction work in Delhi
              </div>
              <div className="text-xs md:text-sm text-gray-900">
                Property Name
              </div>
            </div>

            {/* status */}
            <div className=" flex items-center justify-evenly py-3 rounded-md bg-green-100 text-green-500 cursor-pointer text-sm w-11/12 md:w-36 text-center font-semibold my-3 mx-3 md:mx-0">
              {icons.Projects.tick}
              Approved
            </div>
          </div>

          {/* project description */}
          <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
            <div className="text-sm my-3 font-semibold">About Project</div>
            <div className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius
              officia fugiat quod temporibus pariatur reprehenderit porro,
              expedita sapiente dicta ad adipisci consectetur molestias
              recusandae voluptatibus debitis, accusamus consequatur deleniti.
              Optio nemo vitae, quae doloremque dolores saepe quis molestiae
              cupiditate atque rem architecto numquam. Aliquid veniam quas
              dicta, repudiandae impedit quaerat consequatur accusantium
              laudantium, odit voluptates non modi! Consectetur, eveniet.
            </div>
          </div>

          {/* property info */}
          <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
            <div className="text-sm my-3 font-semibold">Property Info</div>
            <div className="auto-cols-max gap-3 grid grid-flow-col grid-cols overflow-auto scrollbar-hide md:flex md:w-fit md:justify-between md:items-center px-6 py-2 border border-gray-300 rounded-lg">
              <div className="w-fit flex items-center justify-between pr-4 border-r border-gray-300">
                <div className="mr-2">{icons.ProjectCard.area}</div>
                <div className="text-gray-900 font-medium">1300 sq.ft</div>
              </div>
              <div className="w-fit flex items-center justify-between px-4 border-r border-gray-300">
                <div className="mr-2 ">{icons.dollar}</div>
                <div className="text-gray-900 font-medium">4500</div>
              </div>
              <div className="w-fit flex items-center justify-between px-4 border-r border-gray-300">
                <div className="mr-2 ">{icons.ProjectCard.calender}</div>
                <div className="text-gray-900 font-medium">
                  22-01-22 to 22-01-22
                </div>
              </div>
              <div className="w-fit flex items-center justify-between px-4">
                <div className="mr-2 ">{icons.Projects.units}</div>
                <div className="text-gray-900 font-medium">3 units</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block mr-2 mt-8">
            {icons.Projects.units}
          </div>

          {/* scope of work */}
          <div className="flex flex-col w-full md:px-0 mt-3">
            <div className="text-sm my-3 font-semibold">Scope of Work</div>
            <ul className="list-disc mx-5">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                neque?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                neque?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                neque?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                neque?
              </li>
            </ul>
          </div>

          {/* location */}
          <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
            <div className="text-sm my-3 font-semibold">Location</div>
            <div className="w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              corrupti.
            </div>
          </div>

          {/* tags */}
          <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
            <div className="text-sm my-3 font-semibold">Tags</div>
            <div className="flex">
              <div className=" flex items-center justify-evenly py-2 md:py-3 bg-gray-300 rounded-md cursor-pointer text-sm w-16 text-center my-3 mr-3">
                Tag1
              </div>
              <div className=" flex items-center justify-evenly py-2 md:py-3 bg-gray-300 rounded-md  cursor-pointer text-sm w-16 text-center my-3 mx-3">
                Tag2
              </div>
              <div className=" flex items-center justify-evenly py-2 md:py-3 bg-gray-300 rounded-md  cursor-pointer text-sm w-16 text-center my-3 mx-3">
                Tag3
              </div>
              <div className=" flex items-center justify-evenly py-2 md:py-3 bg-gray-300 rounded-md  cursor-pointer text-sm w-16 text-center my-3 mx-3">
                Tag4
              </div>
            </div>
          </div>
        </div>
        {/* toggles */}
        <div className="hidden md:flex md:flex-col w-20 items-center ml-12">
          <div className="p-3 mb-3 bg-sky-400 rounded w-12 h-12 flex justify-center items-center">
            {icons.Projects.info}
          </div>
          <div className="p-3 my-3 border rounded border-gray-500 w-12 h-12 flex justify-center items-center">
            {icons.Projects.manager}
          </div>
          <div className="p-3 my-3 border rounded border-gray-500 w-12 h-12 flex justify-center items-center">
            {icons.Projects.price}
          </div>
          <div className="p-3 my-3 border rounded border-gray-500 w-12 h-12 flex justify-center items-center">
            {icons.Projects.milestone}
          </div>
          <div className="p-3 my-3 border rounded border-gray-500 w-12 h-12 flex justify-center items-center">
            {icons.Projects.share}
          </div>
          <div className="p-3 my-3 border rounded border-gray-500 w-12 h-12 flex justify-center items-center">
            {icons.Projects.more}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;
