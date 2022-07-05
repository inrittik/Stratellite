import { useState } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";
import DisputeItem from "./DisputeItem";

interface AriseDisputeProps {
  setExpand: any;
}

const AriseDisputeModal: React.FC<AriseDisputeProps> = ({ setExpand }) => {
  const [statusView, setStatusView] = useState(false);

  const handleClosePopup = () => {
    setStatusView(false);
    setExpand(false);
  };
  return (
    <div className="absolute left-0 bottom-0 w-screen h-screen bg-gray-700 z-10">
      <div
        className="absolute right-3 cursor-pointer"
        onClick={handleClosePopup}
      >
        {icons.Projects.cross}
      </div>
      <div className="absolute left-0 bottom-0 w-screen h-[90%] bg-white overflow-x-hidden flex">
        <div
          className={cx("w-3/5 mx-auto my-4", {
            "ml-36 mr-16": statusView,
          })}
        >
          <div className="flex justify-between">
            <div className="font-semibold text-base text-28">Arise Dispute</div>
            <div
              className="px-4 py-3 border border-gray-500 flex justify-between items-center rounded w-44 cursor-pointer"
              onClick={() => setStatusView(true)}
            >
              {icons.Projects.dispute}
              <span>Dispute Status</span>
            </div>
          </div>
          <div className="my-6">Reason of Dipute</div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            className="border w-full border-slate-300 focus:outline-none rounded my-3 p-5 text-sm  placeholder-gray-700 text-gray-700"
            placeholder="Write reason of dispute......"
          ></textarea>

          <div className="my-6">Reason of Dipute</div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            className="border w-full border-slate-300 focus:outline-none rounded my-3 p-5 text-sm  placeholder-gray-700 text-gray-700"
            placeholder="Write your comments......"
          ></textarea>

          <button className="flex justify-center items-center p-3 px-5 bg-sky-400 text-white rounded cursor-pointer">
            Submit
          </button>
        </div>

        <div
          className={cx("w-1/5 my-4 border-l border-l-gray-500 pl-12", {
            hidden: !statusView,
          })}
        >
          <span
            className="absolute top-28 right-[27%] rounded-full border border-gray-500 bg-white text-gray-500 cursor-pointer"
            onClick={() => setStatusView(false)}
          >
            {icons.Projects.crosBlack}
          </span>
          <div className="font-semibold text-base text-28">Dispute Status</div>
          <div className="flex flex-col">
            <DisputeItem name="Dispute Arised" date="10th Nov, 2021" />
            <DisputeItem
              name="Manager and Stratelite Notified"
              date="10th Dec, 2021"
            />
            <DisputeItem name="Dispute Arised" date={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AriseDisputeModal;
