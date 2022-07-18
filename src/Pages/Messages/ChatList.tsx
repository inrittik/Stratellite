import cx from "classnames";
import { icons } from "../../utils/icons";
import ChatCard from "../../Components/ChatCard";
import { chatList } from "../../data/messages";
import { useContext } from "react";
import messagesContext from "../../Contexts/Messages/messagesContext";

const ChatList = () => {
  const item = useContext(messagesContext);
  return (
    <div
      className={cx(
        "w-100 md:w-[37%] h-[82vh] border border-gray-500 rounded mx-2 p-3",
        { "hidden md:block": item.state.isSelected }
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="bg-sky-400 text-white rounded p-4 md:p-3 w-4/5 md:w-fit text-sm">
          Add Contacts
        </div>
        <div className="border rounded border-gray-500 p-4 md:p-2">
          {icons.filter}
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-hide max-h-[83%]">
        {chatList.map((chat) => {
          return (
            <ChatCard
              name={chat.name}
              lastMessage={chat.lastMessage}
              time={chat.time}
            />
          );
        })}
      </div>
      <div className="border border-gray-500 rounded flex items-center mt-2 p-3 px-6 cursor-pointer">
        <div className="text-gray-200 w-[1.5rem] mr-4">
          {icons.notifications.settings}
        </div>
        <div className="text-gray-200">Message setting</div>
      </div>
    </div>
  );
};

export default ChatList;
