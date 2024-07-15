import { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const PageTransition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    document.body.style.overflowY = "hidden";
  };

  const handleExited = () => {
    document.body.style.overflowY = "";
    setIsTransitioning(false);
  };

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={600}
        mountOnEnter
        unmountOnExit
        onEnter={handleEnter}
        onExited={handleExited}
      >
        <Outlet />
      </CSSTransition>
    </TransitionGroup>
  );
};
