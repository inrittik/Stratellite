import { icons } from "../../utils/icons";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import Calender from "../../Components/Calender";
import RecentEvents from "../../Components/RecentEvents";
import Reminders from "../../Components/Reminders";
import { useState } from "react";
import cx from "classnames";
import CreateSection from "./CreateSection";
import ProjectsSearchBar from "../../Components/ProjectsSearchBar";

const Main = () => {
  const [state, dispatch] = useGlobalContext();
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <div
      className={cx("overflow-x-hidden", {
        calender: sidebarActive,
        "project overflow-y-auto": !sidebarActive,
      })}
    >
      <div className="flex flex-col overflow-auto">
        {/* search bar */}
        {sidebarActive && (
          <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] w-100 items-center md:mx-0 mx-5">
            <div className="md:mx-15 md:h-18 h-14 rounded-md flex pl-8 items-center py-6 gap-7 bg-gray-400 w-full">
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
          </div>
        )}

        {!sidebarActive && <ProjectsSearchBar />}
        <div className="d-flex flex-col md:px-15 md:pl-15 md:pl-5 px-0 pt-6 md:pt-11">
          <div className="flex flex-col items-start justify-between ml-5 md:ml-0 w-full mb-6">
            <div className="text-28 text-gray-800 font-medium mb-4">
              Calender
            </div>
            <div className="hidden md:block text-base md:text-lg text-gray-600 mb-6">
              Here is a list of all the projects you have been working on.
            </div>
          </div>

          {/* main body */}
          <div className="hidden md:flex">
            <div className="flex flex-col mr-4">
              <Calender setSidebarActive={setSidebarActive} />
              <RecentEvents />
            </div>
            <div className="w-full">
              {sidebarActive && <Reminders />}
              {!sidebarActive && (
                <CreateSection setsidebarActive={setSidebarActive} />
              )}
            </div>
          </div>

          {sidebarActive && (
            <div className="flex flex-col md:hidden">
              <Calender setSidebarActive={setSidebarActive} />
              <Reminders />
              <RecentEvents />
            </div>
          )}
          <div className="w-11/12 mx-auto md:hidden">
            {!sidebarActive && (
              <CreateSection setsidebarActive={setSidebarActive} />
            )}
          </div>
        </div>
      </div>
      <Sidebar sidebarActive={sidebarActive} />
    </div>
  );
};

export default Main;
