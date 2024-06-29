import "./Sidebar.css";
import Icon from "../../../assets/icons/icon";
import { SidebarNavigation } from "./sidebarNavigation/SidebarNavigation";
import { SidebarWorkspace } from "./sidebarWorkspace/SidebarWorkspace";
import { useEffect } from "react";

interface IconProps {
  isMenuClicked: boolean;
  setIsMenuClicked: (value: boolean) => void;
}

export const Sidebar: React.FC<IconProps> = ({
  isMenuClicked,
  setIsMenuClicked,
}) => {
  const menuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  useEffect(() => {
    const bodyElement = document.body;
    if (isMenuClicked) {
      bodyElement.classList.add("body--overflow");
    } else {
      bodyElement.classList.remove("body--overflow");
    }

    // Cleanup function to remove class when the component is unmounted or isMenuClicked changes
    return () => {
      bodyElement.classList.remove("body--overflow");
    };
  }, [isMenuClicked]);

  return (
    <>
      <nav className={`sidebar ${isMenuClicked ? "sidebar--open" : ""}`}>
        <div className="sidebar__logo-title">
          <span className="sidebar__logo"></span>
          <span className="sidebar__company-name">Taskle</span>
          <div
            onClick={menuClicked}
            className={`menu ${isMenuClicked ? "menu--open" : ""}`}
          >
            <div className="menu__item"></div>
            <div className="menu__item"></div>
          </div>
        </div>
      </nav>
      <div
        className={`sidebar__bottom ${
          isMenuClicked ? "sidebar__bottom--open" : ""
        }`}
      >
        <SidebarNavigation />
        <SidebarWorkspace />
        <button className="sidebar__logout-button">
          <Icon name="arrowBack" width={20} height={20} />
          Log out
        </button>
      </div>
    </>
  );
};
