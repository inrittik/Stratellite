import { icons } from "../../../utils/icons";
import { useState } from "react";
import cx from "classnames";
import { useGlobalContext } from "../../../Contexts/GlobalContext";
import ProjectInfo from "../Sections/ProjectInfo";
import ManagerInfo from "../Sections/ManagerInfo";
import Bidding from "../Sections/Bidding";
import Milestone from "../Sections/Milestone";
import NewProjects from "../Sections/NewProjects";
import InProgress from "../Sections/InProgress";
import Completed from "../Sections/Completed";
import Rejected from "../Sections/Rejected";
import DisputedProjects from "../Sections/DisputedProjects";
import BackButton from "../../../Components/BackButton";
import PhotoGallery from "../Sections/PhotoGallery";
import { useNavigate } from "react-router-dom";
import AriseDisputeModal from "../../../Components/AriseDisputeModal";

const toggleOptions = [
  {
    name: "Project Details",
    icon: icons.Projects.info,
    subSectionId: 1,
  },
  {
    name: "Manager Info",
    icon: icons.Projects.manager,
    subSectionId: 2,
  },
  {
    name: "Bidding",
    icon: icons.Projects.price,
    subSectionId: 3,
  },
  {
    name: "Milestone",
    icon: icons.Projects.milestone,
    subSectionId: 4,
  },
  {
    name: "Share",
    icon: icons.Projects.share,
    subSectionId: 5,
  },
  {
    name: "Photo Gallery",
    icon: icons.Projects.images,
    subSectionId: 6,
  },
  {
    name: "More",
    icon: icons.Projects.more,
    subSectionId: 7,
  },
];

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
    name: "Rejected",
    id: 5,
  },
  {
    name: "Disputed",
    id: 6,
  },
];
interface ActiveProjects {
  status: string;
}

const ActiveProjects: React.FC<ActiveProjects> = ({ status }) => {
  const [state, dispatch] = useGlobalContext();
  const [section, setSection] = useState(2);
  const [subsection, setSubsection] = useState(1);
  const [more, setMore] = useState(false);
  const [dispute, setDispute] = useState(false);

  const navigate = useNavigate();
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
              <span className={`${subsection === 6 ? "hidden" : ""}`}>
                Your Projects
              </span>
              <span
                className={`flex items-center ${
                  subsection === 6 ? "" : "hidden"
                }`}
              >
                <span
                  className="p-3 cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  {icons.gallery.back}
                </span>
                Photo Gallery
              </span>
              <span
                className={`text-gray-600 font-normal md:hidden ${
                  subsection === 6 ? "hidden" : ""
                }`}
              >
                /Active
              </span>
            </div>
            <div
              className={`hidden md:block text-base md:text-lg text-gray-600 mb-6 ${
                subsection === 6 ? "md:hidden" : ""
              }`}
            >
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

        <div
          className={cx(
            "hidden auto-cols-33% md:auto-cols-15% md:grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:mx-12 h-fit border-b border-gray-500",
            {
              "md:hidden": subsection === 6,
            }
          )}
        >
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
      </div>

      {section === 1 && <NewProjects />}
      {section === 3 && <InProgress />}
      {section === 4 && <Completed />}
      {section === 5 && <Rejected />}
      {section === 6 && <DisputedProjects />}
      {/* landing section */}
      <div
        className={cx("flex flex-col-reverse md:flex-row", {
          hidden: section !== 2,
        })}
      >
        {/* main section */}
        {subsection === 1 && <ProjectInfo status={status} />}
        {subsection === 2 && <ManagerInfo />}
        {subsection === 3 && <Bidding isMeetingDone={false} />}
        {subsection === 4 && <Milestone />}
        {subsection === 6 && <PhotoGallery />}

        {/* toggles laptop view*/}
        <div className="hidden md:flex md:flex-col w-20 items-center ml-12">
          {toggleOptions.map((option) => {
            return (
              <>
                <div
                  className={cx(
                    "p-3 mb-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer",
                    {
                      "text-gray-100 border border-gray-500":
                        subsection !== option.subSectionId,
                      "text-white bg-sky-400":
                        subsection === option.subSectionId,
                      "": subsection === option.subSectionId,
                    }
                  )}
                  onClick={() => {
                    option.subSectionId === 7
                      ? setMore(!more)
                      : setSubsection(option.subSectionId);
                  }}
                >
                  {option.icon}
                </div>
                <div
                  className={cx(
                    "flex flex-col rounded border items-center border-gray-500 h-fit w-32 shadow-[0_4px_30px_rgba(0,0,0,0.25)] relative right-16 bg-white bottom-8",
                    {
                      hidden: option.subSectionId !== 7 || more === false,
                    }
                  )}
                >
                  <a className="font-semibold py-2 border-b border-gray-500 w-4/5 text-center cursor-pointer">
                    Report
                  </a>
                  <a
                    className="text-red-500 py-2 cursor-pointer"
                    onClick={() => setDispute(true)}
                  >
                    Arise Dispute
                  </a>
                </div>
              </>
            );
          })}
        </div>

        {/* toggles mobile view */}
        <div className="auto-cols-33% md:auto-cols-15% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-0 ml-5 md:mx-12 h-fit md:hidden border-b border-gray-500">
          {toggleOptions.map((option) => {
            return (
              <a
                className={`ml-3 text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
                  subsection === option.subSectionId
                    ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                    : ""
                }`}
                onClick={() => setSubsection(option.subSectionId)}
              >
                {option.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className={cx({ hidden: !dispute })}>
        <AriseDisputeModal setExpand={setDispute} />
      </div>
    </div>
  );
};

export default ActiveProjects;
