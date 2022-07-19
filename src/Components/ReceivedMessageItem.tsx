interface ReceivedMessageProps {
  text: string;
  time: string;
}

const ReceivedMessageItem: React.FC<ReceivedMessageProps> = ({
  text,
  time,
}) => {
  return (
    <div className="flex items-end my-3 px-3">
      <img
        className="h-9 w-9 rounded-full object-cover mr-2"
        src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
        alt=""
      ></img>
      <div className="w-3/5 border rounded-md border-gray-500 p-3">
        <div className="text-xs">{text}</div>
        <div className="text-right text-sky-400 text-[0.6rem]">{time}</div>
      </div>
    </div>
  );
};

export default ReceivedMessageItem;
