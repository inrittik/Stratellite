import React from "react";
import { icons } from "../../utils/icons";

const ProjectCard = () => {
  return (
    <div className="w-11/12 p-5 my-2 flex flex-col rounded-lg border border-gray-60 md:flex-row">
      {/* project details */}
      <div className="w-4/5 flex flex-col mx-auto">
        {/* project name */}
        <div className="text-1.5xl text-gray-900 font-semibold mb-2">
          Construction work in Delhi
        </div>
        {/* project subtitle */}
        <div className="text-sm text-gray-800 mb-4">Property Name</div>
        {/* project description */}
        <div className="text-gray-900 w-2/3">
          Adarsh Group is venturing in homes inspired by millenial generation.
          Adarsh Greens, offering new Lifestyle, with the same Trust, Quality &
          Consistency...
        </div>
        <div className="flex items-center my-4">
          <div className="mr-2">{icons.ProjectCard.area}</div>
          <div className="text-gray-900 ml-1 mr-6 font-medium">1300 sq.ft</div>
          {icons.dollar}
          <div className="text-gray-900 ml-1 mr-6 font-medium">4500</div>
          <div className="mr-2 ">{icons.ProjectCard.calender}</div>
          <div className="text-gray-700 text-sm font-medium">
            22-01-22 to 22-01-22
          </div>
        </div>
        {/* date */}
        <div className="text-gray-100 text-sm">6 Jan, 2020</div>
      </div>

      {/* button section */}
      <div className="flex flex-col mx-auto">
        <a
          href="#"
          className="py-4 bg-sky-400 rounded-md text-white cursor-pointer px-5.5 text-sm w-60 text-center my-3"
        >
          View Project Details
        </a>
        <a
          href="#"
          className="py-4 text-sky-400 border-sky-400 border rounded-md text-white cursor-pointer px-5.5 text-sm w-60 text-center my-3"
        >
          Submit Interest
        </a>
        <a href="#" className="text-gray-100 text-xs text-center my-4">
          View Manager Profile
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
