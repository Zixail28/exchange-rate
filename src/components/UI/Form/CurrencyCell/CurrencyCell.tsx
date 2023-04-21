import { FC } from "react";
import { Icons } from "../../Icons/Icons";
import { countryCurrency } from "../../../data/Types/Types";

const CurrencyCell: FC<{
  data: countryCurrency[];
  count: number;
  styles?: string;
}> = ({ data, count, styles }) => {
  return (
    <>
      {data.map((e,i) => (
        <div className="flex justify-between px-10 font-bold text-white" key={i}>
          <div className="flex items-center">
            <div>{Icons[e.countryName]()}</div>
            {e.currencyCode}
          </div>
          <div className="">{(count ? (count / e.bynExchangeRate).toFixed(2) : 0) + " " + e.currencySymbol}</div>
        </div>
      ))}
    </>
  );
};

export default CurrencyCell;
