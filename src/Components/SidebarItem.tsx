import cx from "classnames";
import CustomIcon from "./CustomIcon";
import { useState, useEffect } from "react";
export interface SidebarItemProps {
  id: number;
  text: string;
  isSelected: boolean;
  icon: JSX.Element;
  badgeValue?: number;
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  isSelected,
  icon,
  badgeValue,
}) => {
  return (
    <div
      className={cx(
        "flex h-16 items-center pr-7 md:bg-transparent cursor-pointer rounded-md md:rounded-none",
        {
          "bg-sky-400": isSelected,
        }
      )}
    >
      <div
        className={cx(
          "invisible md:visible  h-full bg-sky-400 w-2.125 mr-5 md:mr-10 rounded-r-md",
          {
            "md:invisible": !isSelected,
          }
        )}
      ></div>
      <div
        className={cx("icon mr-6", {
          "md:text-sky-400": isSelected,
          "text-graymain": !isSelected,
          "text-white": isSelected,
        })}
      >
        {icon}
      </div>
      <div
        className={cx("flex-grow text-lg", {
          "font-medium": isSelected,
          "md:text-sky-400": isSelected,
          "text-graymain": !isSelected,
          "text-white": isSelected,
        })}
      >
        {text}
      </div>
      {badgeValue && (
        <div className="bg-sky-400 text-white text-xs w-8 h-6 flex items-center justify-center rounded-md">
          {badgeValue}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
