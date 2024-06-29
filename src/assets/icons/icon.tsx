import {
  Dashboard,
  Projects,
  Task,
  Calendar,
  Plus,
  Search,
  ArrowBack,
  Notification,
  Filters,
  Users,
  PlusAlternative,
  AllTasks,
  Progress,
  Done,
  CalendarAlternative,
  Comentary,
  Edit,
  Trash,
} from "./icons";

const iconComponents = {
  dashboard: Dashboard,
  projects: Projects,
  task: Task,
  calendar: Calendar,
  plus: Plus,
  search: Search,
  arrowBack: ArrowBack,
  notification: Notification,
  filters: Filters,
  users: Users,
  plusAlternative: PlusAlternative,
  allTasks: AllTasks,
  progress: Progress,
  done: Done,
  calendarAlternative: CalendarAlternative,
  comentary: Comentary,
  edit: Edit,
  trash: Trash,
};
type IconName = keyof typeof iconComponents;
interface iconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icon: React.FC<iconProps> = ({ name, ...props }) => {
  const IconComponent = iconComponents[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...props} />;
};

export default Icon;
