import { Outlet } from "react-router-dom";
import { FC } from "react";

import Header from "./staticComponents/Header/Header";
import Footer from "./staticComponents/Footer/Footer";
import Main from "./staticComponents/Main/Main";

const Layout: FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
