import { icons } from "../../utils/icons";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import RightSidebar from "../../Components/RightSidebar";
import ChatCard from "../../Components/ChatCard";
import { chatList } from "../../data/messages";
import ChatBox from "../../Components/ChatBox";
import MessagesState from "../../Contexts/Messages/messagesState";

const Main = () => {
  const [state, dispatch] = useGlobalContext();
  return (
    <MessagesState>
      <div className="home">
        <div className="flex flex-col overflow-auto">
          <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] w-100 items-center md:mx-0 mx-5">
            <div className="md:mx-15 md:h-18 h-14 rounded-md flex pl-8 items-center py-6 gap-7 bg-gray-400 w-full">
              {icons.search}
              <input
                className=" w-full bg-transparent text-gray-200 text-base border-none outline-none"
                placeholder="Search for projects"
              ></input>
            </div>
            <div
              onClick={() =>
                dispatch({ setState: { showSidebar: !state.showSidebar } })
              }
              className="h-14 cursor-pointer rounded md:hidden aspect-square flex items-center justify-center border border-gray-300"
            >
              {icons.threeBars}
            </div>
          </div>
          <div className="mx-12 flex max-h-[82vh] mb-3">
            <div className="w-[37%] border border-gray-500 rounded mx-2 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-sky-400 text-white rounded p-3">
                  Add Contacts
                </div>
                <div className="border rounded border-gray-500 p-2">
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
            <ChatBox />
          </div>
        </div>
        <RightSidebar />
      </div>
    </MessagesState>
  );
};

export default Main;
