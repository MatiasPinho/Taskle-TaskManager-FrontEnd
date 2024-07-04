import { useLocation, Outlet } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const PageTransition = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <Outlet />
      </CSSTransition>
    </TransitionGroup>
  );
};
