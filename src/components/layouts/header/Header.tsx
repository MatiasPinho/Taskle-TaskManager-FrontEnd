import "./Header.css";
import { HeaderControls } from "./headerControls/HeaderControls";
import { HeaderUserInfo } from "./headerUserInfo/HeaderUserInfo";

interface IconProps {
  isMenuClicked: boolean;
  setIsMenuClicked: (value: boolean) => void;
}

export const Header: React.FC<IconProps> = ({ isMenuClicked }) => {
  return (
    <header className={`header ${isMenuClicked ? "header--opacity" : ""}`}>
      <nav className="header__nav">
        <HeaderUserInfo />
        <HeaderControls />
      </nav>
    </header>
  );
};
