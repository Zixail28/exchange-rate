import { FC } from "react";
import { NavLink } from "react-router-dom";

const sampleStylesA = "hover:text-cyan-500 active:text-gray-600 transition-colors duration-300 ease-in-out m-3"

const Header: FC = () => {
  const className = ({ isActive }: { isActive: boolean }) =>
    isActive ? sampleStylesA + " border-b-4 border-cyan-500 border-solid" : sampleStylesA;

  return (
    <header className="w-full bg-gray-800 py-4 px-8 flex flex-col">
      <nav>
        <ul className="text-white text-2xl font-bold">
          <NavLink to={"/"} className={className}>
            Home
          </NavLink>
          <NavLink to={"/exchange-rate"} className={className}>
            Exchange rate
          </NavLink>
          <NavLink to={"/3213"} className={className}>
            404
          </NavLink>
        </ul>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
