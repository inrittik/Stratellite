import React from "react";

const ActiveProjectCard = () => {
  return (
    <div className="md:w-full py-5 px-0 md:px-5 my-2 flex flex-col rounded-lg border border-gray-60 md:flex-row mx-auto md:mx-0">
      <div className="w-full flex flex-col justify-between items-center md:flex-row md:mx-auto">
        {/* section 1 */}
        <div className="flex flex-col">
          <div className="text-1.5xl text-gray-900 font-semibold mb-2">
            Construction work in Delhi
          </div>
          <div className="text-gray-900">
            Adarsh Group is venturing in homes inspired by millenial generation.
          </div>
        </div>
        {/* section 2 */}
        <div className="flex justify-between border-y border-y-gray-60 md:border-y-0 my-5 md:my-0 py-4">
          <div className="flex flex-col mx-3 md:mx-6">
            <div className="text-gray-900 font-semibold mb-2 text-sm md:text-base">
              Tier 1
            </div>
            <div className="text-gray-900 md:w-4/5">Tier</div>
          </div>
          <div className="flex flex-col mx-3 md:mx-6">
            <div className="text-gray-900 font-semibold mb-2 text-sm md:text-base">
              22nd Dec, 2021
            </div>
            <div className="text-gray-900 md:w-4/5">Start Date</div>
          </div>
          <div className="flex flex-col mx-3 md:mx-6">
            <div className="text-gray-900 font-semibold mb-2 text-sm md:text-base">
              22nd Dec, 2022
            </div>
            <div className="text-gray-900 md:w-4/5">End Date</div>
          </div>
        </div>

        {/* section 3 */}
        <a
          href="#"
          className="py-4 bg-sky-400 rounded-md text-white cursor-pointer px-5.5 text-sm w-60 text-center my-3"
        >
          Under Review
        </a>
      </div>
    </div>
  );
};

export default ActiveProjectCard;
