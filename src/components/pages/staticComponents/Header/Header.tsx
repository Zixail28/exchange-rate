import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <ul>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/exchange-rate"}>Exchange rate</NavLink>
        <NavLink to={"/"}>Home</NavLink>
      </ul>
    </header>
  );
};

export default Header;
