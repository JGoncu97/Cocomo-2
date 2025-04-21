import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/home/Home";
import { Application } from "../page/application/Application";
import { Documentation } from "../page/documentation/Documentation";
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
