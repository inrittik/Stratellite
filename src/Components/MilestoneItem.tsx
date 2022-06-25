import React from "react";

interface MilestoneItemProps {
  message: any;
  milestone: any;
  setMilestone: any;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({
  message,
  milestone,
  setMilestone,
}) => {
  const handleDelete = () => {
    const filteredData = milestone.filter((data: any) => {
      return data !== message;
    });
    setMilestone(filteredData);
  };

  const handleEdit = () => {};
  return (
    <div className="flex items-center mb-8 justify-between">
      <div className="flex items-center ">
        <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3">
          <div className="border-2 w-5 h-5 rounded-full border-black"></div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-sm md:text-base mb-1">
            {message}
          </div>
        </div>
      </div>

      <div className="flex font-semibold">
        <div
          className="py-3 px-4 border rounded border-sky-400 text-sky-400 mx-4 cursor-pointer"
          onClick={handleEdit}
        >
          Edit
        </div>
        <div
          className="py-3 px-4 border rounded border-red-500 text-red-500 cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default MilestoneItem;
