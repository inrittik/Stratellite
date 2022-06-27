import { icons } from "../utils/icons";
import PhotoList from "./PhotoList";

const GallerySection = () => {
  return (
    <>
      <div className="border-t border-gray-300 pt-2 mb-6">
        <div className="flex w-2/3">
          <input
            type="text"
            className="border border-slate-300 outline-none rounded p-3 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12 mr-3"
          />
          <button className="p-3 px-2 border border-sky-400 rounded text-sky-400">
            {icons.gallery.tick}
          </button>
        </div>

        <div className="flex justify-between mx-3 mt-2 items-center">
          <div className="flex justify-between w-60">
            <div className="flex justify-between w-28">
              <span>{icons.gallery.calender}</span>
              2-feb, 2022
            </div>
            <div className="flex justify-between w-24">
              <span>{icons.gallery.clock}</span>
              06:54 AM
            </div>
          </div>
          <button className="p-4 px-7 border border-slate-300 rounded text-sky-400 flex items-center w-40 justify-between">
            {icons.gallery.edit}
            <div className="font-semibold">Edit Title</div>
          </button>
        </div>
      </div>

      {/* photos */}
      <PhotoList />
    </>
  );
};

export default GallerySection;
