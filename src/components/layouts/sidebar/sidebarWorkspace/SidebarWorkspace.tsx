import Icon from "../../../../assets/icons/icon";
import "./SidebarWorkspace.css";

export const SidebarWorkspace = () => {
  return (
    <div className="sidebar__workspace">
      <span className="sidebar__workspace-title">
        WORKSPACE <Icon name="plus" width={20} height={20} />
      </span>
      <ul className="sidebar__workspace-list">
        <li className="sidebar__workspace-item ">
          <a className="sidebar__workspace-navigation active-workspace" href="">
            <span className="circle-importance orange"></span>Hikoko Design
          </a>
        </li>
        <li className="sidebar__workspace-item">
          <a className="sidebar__workspace-navigation" href="">
            <span className="circle-importance blue"></span>Website Design
          </a>
        </li>
        <li className="sidebar__workspace-item">
          <a className="sidebar__workspace-navigation" href="">
            <span className="circle-importance yellow"></span>Mobile Design
          </a>
        </li>
        <li className="sidebar__workspace-item">
          <a className="sidebar__workspace-navigation" href="">
            <span className="circle-importance purple"></span>Blank
          </a>
        </li>
      </ul>
    </div>
  );
};
