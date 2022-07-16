import { useState } from "react";
import { icons } from "../utils/icons";

interface ChatCardProps {
  name: string;
  lastMessage: string;
  time: string;
}

const ChatCard: React.FC<ChatCardProps> = ({ name, lastMessage, time }) => {
  const [message, setMessage] = useState(lastMessage.slice(0, 30));

  return (
    <div className="border border-gray-500 rounded p-2 flex items-center justify-between my-2 cursor-pointer">
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
        <div className="my-1">{icons.arrowDown}</div>
      </div>
    </div>
  );
};

export default ChatCard;
