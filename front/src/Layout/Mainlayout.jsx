import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="">{/* <Navbar /> */}</header>
      {/* main screen */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* footer */}
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Mainlayout;
