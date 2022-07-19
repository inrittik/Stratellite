interface SentMessageProps {
  text: string;
  time: string;
}

const SentMessageItem: React.FC<SentMessageProps> = ({ text, time }) => {
  return (
    <div className="flex items-end my-3 justify-end px-3">
      <div className="w-3/5 rounded-md p-3 bg-sky-400">
        <div className="text-xs text-white">{text}</div>
        <div className="text-right text-[0.6rem] text-white">{time}</div>
      </div>
      <img
        className="h-9 w-9 rounded-full object-cover ml-2"
        src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
        alt=""
      ></img>
    </div>
  );
};

export default SentMessageItem;
