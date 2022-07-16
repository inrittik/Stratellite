import { useState } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";

interface ChatCardProps {
  name: string;
  lastMessage: string;
  time: string;
}

const ChatCard: React.FC<ChatCardProps> = ({ name, lastMessage, time }) => {
  const [message, setMessage] = useState(lastMessage.slice(0, 30));
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className="border border-gray-500 rounded p-2 flex items-center justify-between my-2 cursor-pointer relative">
      <div className="flex">
        <img
          className="h-9 w-9 rounded-full object-cover mr-2"
          src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
          alt=""
        ></img>
        <div className="flex flex-col">
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-[0.6rem] text-gray-700">{`${message}...`}</div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="text-gray-700 text-[0.6rem] my-1">{time}</div>
        <div className="my-1" onClick={() => setShowOptions(!showOptions)}>
          {icons.arrowDown}
        </div>
      </div>

      <div
        className={cx(
          "absolute border border-gray-500 rounded-md z-20 bg-white top-12 left-[50%] shadow-[4px_10px_25px_rgba(0,0,0,0.25)] w-36 flex flex-col p-3 text-black font-medium",
          {
            hidden: !showOptions,
          }
        )}
        onClick={() => setShowOptions(false)}
      >
        <div className="pb-2 border-b border-gray-500 text-xs">
          Archive Chat
        </div>
        <div className="py-2 border-b border-gray-500 text-xs">Delete Chat</div>
        <div className="py-2 border-b border-gray-500 text-xs">
          Mark as unread
        </div>
        <div className="pt-2 border-gray-500 text-xs">Mute Notification</div>
      </div>
    </div>
  );
};

export default ChatCard;
