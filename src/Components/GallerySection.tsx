import { useState } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";
import PhotoList from "./PhotoList";

const GallerySection = () => {
  const [title, setTitle] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleEdit = (e: any) => {
    setSubmit(false);
  };
  return (
    <>
      <div className="flex justify-between items-center border-t border-gray-300 pt-2 mb-6">
        <div className="flex flex-col w-2/3">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="text"
                className={cx(
                  "border border-slate-300 outline-none rounded p-3 placeholder-gray-700 placeholder-gray-700 text-1.5xl text-gray-700 w-11/12 mr-3",
                  {
                    hidden: submit,
                  }
                )}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div
                className={cx("p-3 text-1.5xl text-gray-700 w-11/12 mr-3", {
                  hidden: !submit,
                })}
              >
                {title}
              </div>
              <button
                className={cx(
                  "p-3 border border-sky-400 rounded text-sky-400",
                  {
                    hidden: submit,
                  }
                )}
              >
                {icons.gallery.tick}
              </button>
            </div>
          </form>
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
          </div>
        </div>

        <button
          className="p-4 px-7 border border-slate-300 rounded text-sky-400 flex items-center w-40 justify-between h-fit"
          onClick={handleEdit}
        >
          {icons.gallery.edit}
          <div className="font-semibold">Edit Title</div>
        </button>
      </div>

      {/* photos */}
      <PhotoList />
    </>
  );
};

export default GallerySection;
