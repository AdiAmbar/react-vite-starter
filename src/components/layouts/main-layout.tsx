import { Outlet } from "react-router-dom";

import { Footer } from "../footers/footer";

export default function MainLayout() {
  return (
    <>
    <div>
      <p>hello world</p>
      {/* <NavigationBar /> */}
        <Outlet />
      <Footer />
    </div>
      </>
  );
}
