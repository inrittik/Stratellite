import { useState } from "react";
import MilestoneItem from "../../../Components/MilestoneItem";

const Milestone = () => {
  const [milestone, setMilestone] = useState<any[]>([
    "Contract Order Confirmation",
    "Advance Payment",
    "Project Started",
    "Raw Material Arranged",
    "Task A Completed",
    "Task B Completed",
  ]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    console.log(e);
    e.preventDefault();
    setMilestone(() => [...milestone, message]);

    setMessage("");
  };

  return (
    <div className="flex flex-col w-11/12 md:w-10/12 mt-6 md:mt-0 ml-4 md:ml-12 overflow-y-auto">
      <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
        Stages of Project
      </div>
      <div className="text-xs md:text-sm text-gray-900 my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi
        voluptate, corrupti nisi consectetur blanditiis. Expedita voluptate
        harum quis distinctio numquam, necessitatibus doloribus at soluta quos,
        nulla est obcaecati ex nobis blanditiis velit officiis. Nobis odio rem
        non exercitationem eos.
      </div>

      <div className="flex flex-col mt-3">
        {milestone.map((task: any) => {
          return (
            <MilestoneItem
              message={task}
              milestone={milestone}
              setMilestone={setMilestone}
            />
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex my-3 justify-between w-100">
          <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-black border border-slate-300 mr-3 text-1.5xl font-semibold">
            1
          </div>
          <input
            type="text"
            className="quoteprice outline-none rounded p-2 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 flex-grow border border-slate-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button className="w-full bg-sky-400 text-white text-center mb-3 py-4 rounded">
          Add New Stage
        </button>
      </form>
    </div>
  );
};

export default Milestone;
