import { icons } from "../../../utils/icons";

const Bidding = () => {
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 mt-6 md:mt-0 ml-4 md:ml-12 overflow-y-auto">
      <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
        Construction Work at Delhi Site
      </div>
      <div className="text-xs md:text-base text-gray-600 flex items-center my-2">
        <div className="mr-3">{icons.bidding.plot}</div>
        Plot No. 123, New Delhi, India, 152546
      </div>
      <div className="flex items-center py-2 rounded-md cursor-pointer text-sm text-center md:text-xssm mx-3 md:mx-0 text-red-500">
        <div className="mr-3">{icons.bidding.clock}</div>
        Submit before 22nd June, 2022
      </div>

      <div className="flex flex-col my-3">
        <div className="flex items-center mb-3">
          <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3">
            {icons.bidding.done}
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-base">
              Quote Range - $650 to $830
            </div>
            <div className="font-semibold text-xssm">10th Nov, 2021</div>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3">
            {icons.bidding.done}
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-base">
              Enter Final Quote Amount
            </div>
            <div className="font-semibold text-xssm">10th Dec, 2021</div>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3">
            <div className="border-2 w-5 h-5 rounded-full border-black"></div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-base">Quote Status</div>
          </div>
        </div>
      </div>

      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        className="border border-slate-300 focus:outline-none rounded my-5 p-5 placeholder-gray-700 text-gray-700"
        placeholder="Write a message......"
      ></textarea>

      <div className="border border-slate-300 flex items-center my-5">
        <label htmlFor="quoteprice" className="w-7 p-3 text-gray-100">
          {icons.Projects.price}
        </label>
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 text-gray-700 w-11/12"
          placeholder={`Quote Amount`}
        />
      </div>

      <div className="border border-slate-300 border-dashed flex items-center my-5 px-3 py-8">
        <label htmlFor="quoteprice" className="w-7 text-gray-100">
          {icons.bidding.file}
        </label>
        <div className="text-gray-700 ml-3">Attach File</div>
      </div>

      <div className="flex my-5">
        <div className="flex items-center mr-6">
          <input type="radio" />
          <label htmlFor="" className="ml-3">
            I Accept Payment Terms
          </label>
        </div>
        <div className="flex items-center">
          <input type="radio" />
          <label htmlFor="" className="ml-3">
            I Accept Delivery Terms
          </label>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
