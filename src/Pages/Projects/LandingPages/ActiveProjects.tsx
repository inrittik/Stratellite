import { icons } from "../../../utils/icons";
import { useState } from "react";
import cx from "classnames";
import { useGlobalContext } from "../../../Contexts/GlobalContext";
import Proprty1 from "../../../assets/project/property1.png";
import Proprty2 from "../../../assets/project/property2.png";
import Proprty3 from "../../../assets/project/property3.png";

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
        <div className="flex flex-col md:w-10/12 mt-6 md:mt-0 ml-6 md:ml-12 overflow-y-auto">
          <div className="flex items-center md:hidden w-full mb-3 justify-between">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full mr-5"
                src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
              ></img>
              <div>
                <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
                  Construction work in Delhi
                </div>
                <div className="text-xs md:text-sm text-gray-900">
                  Delhi, India
                </div>
              </div>
            </div>

            {/* status */}
            <div
              className={cx(
                " flex items-center justify-evenly py-2 rounded-md cursor-pointer h-fit text-sm w-32 md:w-36 text-center font-semibold md:text-xssm mx-3 md:mx-0",
                {
                  "bg-green-100 text-green-500": status === "approved",
                  "bg-blue-100 text-blue-500 w-44": status === "under-review",
                  "bg-red-100 text-red-500": status === "rejected",
                }
              )}
            >
              {status === "approved" && icons.Projects.tick}
              {status === "under-review" && icons.Projects.review}
              {status === "rejected" && icons.Projects.rejected}
              <span className={`${status !== "approved" ? "hidden" : ""}`}>
                Approved
              </span>
              <span className={`${status !== "under-review" ? "hidden" : ""}`}>
                Under-Review
              </span>
              <span className={`${status !== "rejected" ? "hidden" : ""}`}>
                Rejected
              </span>
            </div>
          </div>
          {/* image section */}
          <div className="auto-cols-55% md:auto-cols-33% gap-3 grid grid-flow-col grid-cols overflow-auto pb-4 mb-10">
            <img src={Proprty1} alt="" className="md:h-72 md:mx-4" />
            <img src={Proprty2} alt="" className="md:h-72 md:mx-4" />
            <img src={Proprty1} alt="" className="md:h-72 md:mx-4" />
          </div>

          <div
            className={cx("text-green-500 md:mb-8 w-11/12", {
              hidden: status !== "approved",
            })}
          >
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
            <div
              className={cx(
                " flex items-center justify-evenly py-3 rounded-md bg-green-100 text-green-500 cursor-pointer text-sm md:w-36 text-center font-semibold my-3 md:mx-0",
                {
                  "bg-green-100 text-green-500": status === "approved",
                  "bg-blue-100 text-blue-500": status === "under-review",
                  "bg-red-100 text-red-500": status === "rejected",
                }
              )}
            >
              {status === "approved" && icons.Projects.tick}
              {status === "under-review" && icons.Projects.review}
              {status === "rejected" && icons.Projects.rejected}
              <span className={`${status !== "approved" ? "hidden" : ""}`}>
                Approved
              </span>
              <span className={`${status !== "under-review" ? "hidden" : ""}`}>
                Under-Review
              </span>
              <span className={`${status !== "rejected" ? "hidden" : ""}`}>
                Rejected
              </span>
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
        <div className="auto-cols-33% md:auto-cols-15% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:ml-10 h-fit md:hidden">
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
            Milestone
          </a>
          <a
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 4
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(4)}
          >
            Cost
          </a>
          <a
            className={`text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
              subsection === 5
                ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                : "border-b border-gray-500"
            }`}
            onClick={() => setSubsection(5)}
          >
            Share
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
