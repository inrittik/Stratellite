import { icons } from "../utils/icons";
import cx from "classnames";
import { useState } from "react";

interface NotificationCardProps {
  accessNotif: boolean;
  newNotif: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  accessNotif,
  newNotif,
}) => {
  const [show, setShow] = useState(false);
  const [seen, setSeen] = useState(!newNotif);

  const handleClick = () => {
    setShow(!show);
    setSeen(true);
  };
  return (
    <div
      className="w-full py-4 px-2 md:p-4 my-3 border border-gray-500 rounded cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between ">
        <div
          className={cx(
            "h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full mr-2 md:mr-0",
            { hidden: seen }
          )}
        ></div>
        <div
          className={cx("mr-4 md:mr-1", {
            "mr-4 md:mr-0": !accessNotif,
            "ml-3 md:ml-5": seen,
          })}
        >
          {accessNotif && icons.notifications.access}
          {!accessNotif && (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
              alt=""
            ></img>
          )}
        </div>
        <div className="flex w-4/5 md:w-4/5 items-center flex-wrap text-sm">
          <div>
            <span className="font-semibold mr-1">Lex Murphy</span>
            <span className="mx-1">requested access to</span>
            <span className="font-semibold text-sky-400">
              UNIX directory tree hierarchy
            </span>
          </div>
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row">
          <div className="hidden md:block md:mr-4">Today, 9:42 am</div>
          <div className="relative bottom-2 md:bottom-0 p-3 md:p-3 md:px-5 justify-center items-center flex md:border border-gray-300 rounded-md cursor-pointer">
            {icons.threeDots}
          </div>
        </div>
      </div>
      <div className="flex justify-end text-sm text-gray-600 mt-3 md:hidden">
        Today, 9:42 am
      </div>
      <div
        className={cx("w-2/3 ml-20 duration-100 ease-in-out", {
          "h-fit mt-4": show,
          "mt-0 h-0 overflow-hidden": !show,
        })}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat
        vel error. Sint asperiores sit ipsam magni et nesciunt numquam!
      </div>
    </div>
  );
};

export default NotificationCard;
