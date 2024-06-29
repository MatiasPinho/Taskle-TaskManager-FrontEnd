import Icon from '../../../../assets/icons/icon';
import "./SidebarNavigation.css"
export const SidebarNavigation = () => {
  return (
    <ul className="sidebar__navigation">
      <li className="sidebar__navigation-item">
        <a href="" className="sidebar__navigation-link">
          <Icon name="dashboard" width={25} height={25} />
          Dashboard
        </a>
      </li>
      <li className="sidebar__navigation-item">
        <a href="" className="sidebar__navigation-link">
          <Icon name="projects" width={25} height={25} />
          Projects
        </a>
      </li>
      <li className="sidebar__navigation-item ">
        <a href="" className="sidebar__navigation-link active-link">
          <Icon name="task" width={25} height={25} />
          Tasks
        </a>
      </li>
      <li className="sidebar__navigation-item">
        <a href="" className="sidebar__navigation-link">
          <Icon name="calendar" width={25} height={25} />
          Calendar
        </a>
      </li>
    </ul>
  );
};
