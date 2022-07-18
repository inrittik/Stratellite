import { useContext } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";
import messagesContext from "../Contexts/Messages/messagesContext";

const ChatBox = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const user = useContext(messagesContext);
  return (
    <div
      className={cx(
        "md:w-[63%] h-[82vh] border border-gray-500 rounded p-3 relative",
        {
          "hidden md:block": !user.state.isSelected,
        }
      )}
    >
      <div className={cx({ hidden: !user.state.isSelected })}>
        <div className="flex justify-between items-center border-b border-gray-500 pb-3 px-3">
          <div className="flex ">
            <img
              className="h-10 w-10 rounded-full object-cover mr-2"
              src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
              alt=""
            ></img>
            <div className="flex flex-col">
              <div className="font-semibold text-base">
                {user.state.name && user.state.name}
              </div>
              <div className="text-sm text-gray-700 flex justify-between">
                <div className="text-sky-400 font-semibold mr-3">Online</div>
                <div className="text-gray-600 font-semibold">12 min ago</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="border border-sky-400 text-sky-400 rounded p-3 flex items-center mx-2 cursor-pointer">
              {icons.Messages.voiceCall}
            </div>
            <div className="border border-sky-400 text-sky-400 rounded p-3 flex items-center mx-2 cursor-pointer">
              {icons.Messages.videoCall}
            </div>
            <div className="border rounded p-3 px-5 flex items-center mx-2 cursor-pointer">
              {icons.threeDots}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="absolute bottom-0 py-2 w-[95%] mx-auto flex items-center justify-between">
            <input
              type="text"
              className="quoteprice outline-none rounded p-4 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 flex-grow border border-slate-300 w-3/4"
              placeholder="Type a message..."
            />

            <div className="flex">
              <div className="border rounded w-12 h-12 flex items-center justify-center mx-1 cursor-pointer">
                {icons.Messages.sendFile}
              </div>
              <div className="border rounded w-12 h-12 flex items-center justify-center mx-1 cursor-pointer">
                {icons.Messages.sendPicture}
              </div>
              <button className="rounded w-12 h-12 bg-sky-400 flex items-center justify-center mx-1 cursor-pointer">
                {icons.Messages.sendMessage}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={cx({ hidden: user.state.isSelected })}>
        <div className="flex h-[82vh] w-full items-center justify-center font-semibold text-sky-400 text-28">
          Start A Chat
        </div>
      </div>
    </div>
  );
};

export default ChatBox;