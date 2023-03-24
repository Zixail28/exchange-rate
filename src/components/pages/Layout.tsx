import { Outlet } from "react-router-dom";
import { FC } from "react";
import Header from "./staticComponents/Header/Header";
import Footer from "./staticComponents/Footer/Footer";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
