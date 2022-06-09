import sidebarLogo from "../assets/images/sidebar-logo.png";
import sidebarLogoMob from "../assets/images/sidebar-logo-mobile.png";
import { useGlobalContext } from "../Contexts/GlobalContext";
import { icons } from "../utils/icons";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";
import cx from "classnames";
interface SidebarProps {}

const sidebarItems: SidebarItemProps[] = [
   { icon: icons.sidebarIcons.dashboard, isSelected: true, text: "Dashboard" },
   { icon: icons.sidebarIcons.project, isSelected: false, text: "Project" },
   { icon: icons.sidebarIcons.calendar, isSelected: false, text: "Calendar" },
   { icon: icons.sidebarIcons.messages, isSelected: false, text: "Messages", badgeValue: 5 },
   { icon: icons.sidebarIcons.notifications, isSelected: false, text: "Notifications", badgeValue: 5 },
   { icon: icons.sidebarIcons.contacts, isSelected: false, text: "Project" },
];

const sidebarItems2: SidebarItemProps[] = [
   { icon: icons.sidebarIcons.promotions, isSelected: false, text: "Promotions" },
];
const sidebarItems3: SidebarItemProps[] = [{ icon: icons.sidebarIcons.settings, isSelected: false, text: "Settings" }];
const Sidebar: React.FC<SidebarProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <div
         className={cx(
            "fixed  transition-all flex  ease-in-out delay-150 w-9/12 overflow-x-hidden shadow-[0_4px_60px_rgba(0,0,0,0.25)] md:shadow-none right-0 md:static md:flex bg-white z-10 sidebar flex-col h-full md:w-full md:bg-gray-50 border-r border-sidebarBorder overflow-auto",
            { "w-0": !state.showSidebar }
         )}
      >
         <div className="bg-white p-5 flex items-center gap-15">
            <div
               onClick={() => dispatch({ setState: { showSidebar: false } })}
               className="flex border border-gray-300 cursor-pointer rounded md:hidden h-11 w-11 items-center justify-center"
            >
               {icons.close}
            </div>
            <img className="bg-white hidden md:block w-64" src={sidebarLogo}></img>
            <img className="bg-white md:hidden w-32" src={sidebarLogoMob}></img>
         </div>
         <div className="flex bg-inherit flex-col pt-20 px-5 md:px-0">
            {sidebarItems.map((x) => (
               <SidebarItem {...x}></SidebarItem>
            ))}
         </div>
         <div className="text-sm font-medium my-9 ml-12 ">Promotions</div>
         <div className="flex flex-col px-5 md:px-0">
            {sidebarItems2.map((x) => (
               <SidebarItem {...x}></SidebarItem>
            ))}
         </div>
         <div className="text-sm font-medium my-9 ml-12 md:hidden ">Settings</div>
         <div className="md:hidden flex flex-col px-5 md:px-0">
            {sidebarItems3.map((x) => (
               <SidebarItem {...x}></SidebarItem>
            ))}
         </div>
         <div className="items-end flex-grow flex md:hidden">
            <div className="flex w-full h-32.5 items-center mx-6  border-t border-gray-500">
               <img
                  className="h-16 w-16 rounded-full object-cover mr-5"
                  src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
               ></img>
               <div className="flex flex-col justify-between">
                  <div className="font-medium text-xl md:text-1.5xl mb-2">Oliver Smith</div>
                  <div className="text-xssm">Vendor</div>
               </div>
               <div className="ml-12">{icons.arrowRight}</div>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
