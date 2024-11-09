import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="container mt-4">
      <Outlet />
      <br />
      <footer>Este es el footer</footer>
    </div>
  );
};

export default LayoutPublic;
