import { useState } from "react";
import cx from "classnames";

interface ToggleSwitchProps {
  setMuteField: any;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ setMuteField }) => {
  const [switchedOn, setSwitchedOn] = useState(false);

  const handleToggle = () => {
    setSwitchedOn(!switchedOn);
    switchedOn ? setMuteField(true) : setMuteField(false);
  };
  return (
    <div
      className="w-16 h-8 bg-gray-300 rounded-2xl relative cursor-pointer"
      onClick={handleToggle}
    >
      <div
        className={cx(
          "h-8 w-8 rounded-full absolute border border-gray-500 duration-300 ease-in-out",
          { "bg-sky-400 translate-x-8": switchedOn },
          { "bg-white": !switchedOn }
        )}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
