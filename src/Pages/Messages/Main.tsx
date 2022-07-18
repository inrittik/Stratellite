import { icons } from "../../utils/icons";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import RightSidebar from "../../Components/RightSidebar";
import ChatBox from "../../Components/ChatBox";
import MessagesState from "../../Contexts/Messages/messagesState";
import ChatList from "./ChatList";

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
          <div className="md:mx-12 md:flex max-h-[82vh] my-3 md:mt-0">
            <ChatList />
            <ChatBox />
          </div>
        </div>
        <RightSidebar />
      </div>
    </MessagesState>
  );
};

export default Main;
