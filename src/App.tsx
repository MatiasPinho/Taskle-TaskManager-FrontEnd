import "./App.css";
import "@fontsource-variable/inter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root/Root";
import { Home } from "./components/pages/Home/Home";
import { TaskPage } from "./components/pages/TasksPage/TaskPage";
import { NewTask } from "./components/sections/tasks/newTask/NewTask";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>404 not found</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/tasks",
          element: <TaskPage />,
        },
        {
          path: "tasks/newTask",
          element: <NewTask />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
