import { Dropdown } from "flowbite-react";
import { FC } from "react";
import { countryCurrency } from "../../../data/Types/Types";
import { Icons } from "../../Icons/Icons";

type DropdownCurrencyListProps = {
  data: countryCurrency[];
  handleChange: (action: string) => void;
  state: string;
};

const DropdownCurrencyList: FC<DropdownCurrencyListProps> = ({ data, handleChange, state }) => {
  return (
    <>
    <Dropdown
      label={<>
        {Icons[data.find((e) => e.countryCode === state)!.countryName]()}
        {data.find((e) => e.countryCode === state)!.currencyCode}
      </>}
      color="dark"
      className="w-36 bg-gray-800"
    >
      {data.map((e, i) => (
        <Dropdown.Item
          key={i}
          onClick={() => handleChange(e.countryCode)}
          className="hover:bg-slate-200"
        >
          {Icons[e.countryName]()}
          {e.currencyCode}
        </Dropdown.Item>
      ))}
      </Dropdown>
    </>
  );
};

export default DropdownCurrencyList;
