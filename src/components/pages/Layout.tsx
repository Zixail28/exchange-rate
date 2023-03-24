import { Outlet } from "react-router-dom";
import { FC } from "react";

import Header from "./staticComponents/Header/Header";
import Footer from "./staticComponents/Footer/Footer";
import Main from "./staticComponents/Main/Main";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
