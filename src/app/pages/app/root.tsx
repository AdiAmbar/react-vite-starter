import { Outlet } from "react-router-dom";

export const ErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

const AppRoot = () => {
  return (
    <div>
      <Outlet />
      <p>
        Root component
      </p>
    </div>
  );
};

export default AppRoot;
