import { useEffect, useRef } from "react";
import ReceivedMessageItem from "./ReceivedMessageItem";
import SentMessageItem from "./SentMessageItem";

interface ChatContainerProps {
  messageList: {
    text: string;
    time: string;
    type: string;
  }[];
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messageList }) => {
  const divRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, []);
  return (
    <div
      className="overflow-y-scroll md:overflow-y-auto scrollbar-hide flex flex-col relative min-h-[40vh] max-h-[52vh] md:max-h-[64vh]"
      ref={divRef}
    >
      <div className="overflow-y-scroll md:overflow-y-auto scrollbar-hide">
        {messageList.map((item) => {
          return item.type === "sent" ? (
            <SentMessageItem text={item.text} time={item.time} />
          ) : (
            <ReceivedMessageItem text={item.text} time={item.time} />
          );
        })}
      </div>
    </div>
  );
};

export default ChatContainer;
