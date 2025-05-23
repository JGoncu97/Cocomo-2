import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home/Home";
import { Application } from "../page/Application/Application";
import { Documentation } from "../page/Documentation/Documentation";
import { Developers } from "../page/info/Developers";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/developers",
    element: <Developers />,
  },
  {
    path: "/application",
    element: <Application />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
  },
]);
