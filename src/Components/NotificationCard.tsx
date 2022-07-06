import { icons } from "../utils/icons";
import cx from "classnames";

interface NotificationCardProps {
  accessNotif: boolean;
  newNotif: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  accessNotif,
  newNotif,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-4 my-3 border border-gray-500 rounded">
      <div className="flex w-3/5 items-center">
        <div
          className={cx(
            "h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full mr-2",
            { hidden: !newNotif }
          )}
        ></div>
        <div className={cx("mr-5", { "mr-0": !accessNotif })}>
          {accessNotif && icons.notifications.access}
          {!accessNotif && (
            <img
              className="h-10 w-10 rounded-full object-cover mr-2"
              src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
              alt=""
            ></img>
          )}
        </div>
        <span className="font-semibold mx-1">Lex Murphy</span>
        <span className="mx-1">requested access to</span>
        <span className="font-semibold text-sky-400">
          UNIX directory tree hierarchy
        </span>
      </div>
      <div className="flex items-center">
        <div className="mr-4">Today, 9:42 am</div>
        <div className="p-3 px-5 justify-center items-center flex border border-gray-300 rounded-md cursor-pointer">
          {icons.threeDots}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
