import React from "react";

interface PendingMessageProps {
  message: string;
}

const PendingRadioButton: React.FC<PendingMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center mb-8">
      <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3">
        <div className="border-2 w-5 h-5 rounded-full border-black"></div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-sm md:text-base mb-1">{message}</div>
      </div>
    </div>
  );
};

export default PendingRadioButton;
