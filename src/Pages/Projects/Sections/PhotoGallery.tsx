import React from "react";

const PhotoGallery = () => {
  return (
    <div className="flex flex-col md:w-10/12 mt-6 md:mt-0 ml-6 md:ml-12 overflow-y-auto">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-base md:text-1.5xl text-gray-900 font-semibold my-2">
            Work Photos
          </div>
          <div className="text-xs md:text-sm text-gray-900">
            Here is a list of all the projects you have been working
          </div>
        </div>
        <div className="flex items-center h-fit py-3 px-4 font-semibold border rounded border-sky-400 cursor-pointer text-center text-sky-400">
          Upload Images
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
