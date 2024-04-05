import { Main } from "@/pages";
import {
  RouterProvider,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";

export const MyRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Main />,
    },
  ];

  const element = useRoutes([...routes]);

  return <>{element}</>;
};

const ErrorBoundary = () => {
  return <>An error occured</>;
};

export const router = createBrowserRouter([
  { path: "*", Component: MyRoutes, ErrorBoundary: ErrorBoundary },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
