import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

import PropTypes from "prop-types";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

// to manage state of a child-element (e.g. make it appear when hovering over parent-element):
// mark parent-element with className "group" --> child-element e.g. "group-hover:scale-100"
// see documentation here:
// https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
// DOES NOT WORK IN tailwind.config-file!!

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
SideBarIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
