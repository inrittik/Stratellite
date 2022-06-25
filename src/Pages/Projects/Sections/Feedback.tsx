const Feedback = () => {
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 mt-6 md:mt-0 ml-4 md:ml-12 overflow-y-auto">
      <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
        Rate Your Experience
      </div>

      <div className="flex flex-col">
        <div className="flex">
          <div className="text-gray-700 my-3 text-base">Project Scope</div>
          <div></div>
        </div>
        <div className="flex">
          <div className="text-gray-700 my-3 text-base">Communication</div>
          <div></div>
        </div>
        <div className="flex">
          <div className="text-gray-700 my-3 text-base">Payment</div>
          <div></div>
        </div>
        <div className="flex">
          <div className="text-gray-700 my-3 text-base">Time Management</div>
          <div></div>
        </div>
      </div>

      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        className="border border-slate-300 focus:outline-none rounded my-3 p-5 text-base  placeholder-gray-700 text-gray-700"
        placeholder="Write a feedback......"
      ></textarea>

      <div className="text-gray-700 my-3 text-base">
        Your Overall Experience
      </div>

      <div className="grid grid-cols-3 gap-2 my-3 md:flex justify-between font-semibold text-base w-100 md:w-1/4">
        <div className="p-4 border rounded border-sky-400 text-sky-400 cursor-pointer text-center md:w-20">
          Good
        </div>
        <div className="p-4 border rounded border-sky-400 text-sky-400 cursor-pointer text-center md:w-28">
          Neutral
        </div>
        <div className="p-4 border rounded border-sky-400 text-sky-400 cursor-pointer text-center md:w-20">
          Bad
        </div>
      </div>

      <div className="p-4 bg-sky-400 text-white text-base rounded text-center md:w-24 my-6">
        Submit
      </div>
    </div>
  );
};

export default Feedback;
