import Icon from "../../../../assets/icons/icon";
import "./HeaderControls.css";
export const HeaderControls = () => {
  return (
    <div className="header__controls">
      <form className="header__search-form" action="">
        <input
          className="header__search-input"
          type="text"
          placeholder="Search"
        />
        <Icon name="search" width={40} />
      </form>
      <div className="header__profile-notification">
        <img
          src="/images/generic_pic.webp"
          alt="Profile"
          className="header__profile-pic"
        />
        <Icon name="notification" width={40} />
      </div>
    </div>
  );
};
