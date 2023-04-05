import { FC } from "react";
import { Icons } from "../../Icons/Icons";
import { countryCurrency } from "../../../data/Types/Types";

const CurrencyCell: FC<{
  data: countryCurrency[];
  count: number;
  styles?: string;
}> = ({ data, count, styles }) => {
  console.log(data);
  return (
    <>
      {data.map((e) => (
        <div className="flex justify-between px-10 font-bold text-gray-300">
          <div className="flex items-center">
            <div>{e.iconCode()}</div>
            {e.currencyCode}
          </div>
          <div className="">{count ? (count / e.dollarExchangeRate).toFixed(2) : 0}</div>
        </div>
      ))}
    </>
  );
};

export default CurrencyCell;
