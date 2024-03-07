import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: (
        <h1 className="text-3xl font-bold text-center">React + Vite Custom Starter</h1>
      ),
    },
  ];

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
