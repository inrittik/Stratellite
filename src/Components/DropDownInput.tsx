import React, { useState } from "react";
import cx from "classnames";
import { icons } from "../utils/icons";

const DropDownInput = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative bg-white text-center border border-sky-400 rounded">
      <div className="text-gray-500 py-3 px-6 flex justify-between items-center">
        <span>Milestone Status</span>
        <div className="ml-5 cursor-pointer" onClick={() => setActive(!active)}>
          {icons.Projects.down}
        </div>
      </div>
      <div
        className={cx(
          "absolute w-full top-[100%] left-0 border-b border-l border-r border-sky-400 rounded-b",
          { hidden: !active }
        )}
      >
        <div className="text-green-500 py-3 px-6 border-t border-gray-500">
          Completed
        </div>
        <div className="text-sky-400 py-3 px-6 border-t border-gray-500">
          Inprogress
        </div>
      </div>
    </div>
  );
};

export default DropDownInput;
