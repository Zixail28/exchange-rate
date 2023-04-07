import { FC, useEffect, useState } from "react";
import { chooses, countryCurrency } from "../../data/Types/Types";
import styles from "./Form.module.scss";
import { Dropdown, Label, TextInput } from "flowbite-react";
import { Icons } from "../Icons/Icons";
import CurrencyCell from "./CurrencyCell/CurrencyCell";
import { instance } from "../../data/api/axios";

const currencies = {
  BY: () => (
    <>
      {Icons["Belarus"]()}
      BYN
    </>
  ),
  RU: () => (
    <>
      {Icons["Russia"]()}
      RUB
    </>
  ),
  PL: () => (
    <>
      {Icons["Poland"]()}
      PLN
    </>
  ),
  EU: () => (
    <>
      {Icons["Europian"]()}
      EUR
    </>
  ),
  US: () => (
    <>
      {Icons["USA"]()}
      USD
    </>
  ),
};


async function exchangeRate(currencyCode: string) {
  const { data } = await instance.get(`${currencyCode}?parammode=2`);
  return data.Cur_OfficialRate / data.Cur_Scale;
}

const currencyCalc: countryCurrency[] = [{
  countryCode: "BY",
  countryName: "Belarus",
  iconCode: Icons["Belarus"],
  currencyCode: "BYN",
  currencySymbol: "BYN",
  bynExchangeRate: 1,
},{
  countryCode: "RU",
  countryName: "Russia",
  iconCode: Icons["Russia"],
  currencyCode: "RUB",
  currencySymbol: "\u20BD",
  bynExchangeRate: await exchangeRate("rub"),
},{
  countryCode: "PL",
  countryName: "Poland",
  iconCode: Icons["Poland"],
  currencyCode: "PLN",
  currencySymbol: "\u007A\u0142",
  bynExchangeRate: await exchangeRate("pln"),
},{
  countryCode: "US",
  countryName: "USA",
  iconCode: Icons["USA"],
  currencyCode: "USD",
  currencySymbol: "\u0024",
  bynExchangeRate: await exchangeRate("usd"),
},{
  countryCode: "EU",
  countryName: "Europian",
  iconCode: Icons["Europian"],
  currencyCode: "EUR",
  currencySymbol: "\u20AC",
  bynExchangeRate: await exchangeRate("eur"),
}];

const Form: FC = () => {
  const [currencyState, setCurrencyState] =
    useState<keyof typeof currencies>("BY");
  const [calculatedCurrenciesState, setCalculatedCurrenciesState] = useState<countryCurrency[]>([]);
  const [inputState, setInputState] = useState<string>("");

  useEffect(() => {
    setCalculatedCurrenciesState(currencyCalc.filter((e) => e.countryCode !== currencyState))
  }, [currencyState]);

  function handleChangeCurrency(action: keyof typeof currencies) {
    setCurrencyState(action);
    setInputState("");
  }
  function handleInputChange(event: any) {
    setInputState(event.target.value);
  }

  return (
    <div
      className={`flex h-80 w-96 ${styles.container} relative shadow flex-col`}
    >
      <main className="flex py-2 flex-col h-full shadow-2xl border-2 border-gray-800">
        <header className="flex w-full justify-around items-center">
          <Dropdown
            label={currencies[currencyState]()}
            color="dark"
            className="w-36 bg-gray-800"
          >
            <Dropdown.Item
              onClick={() => handleChangeCurrency("BY")}
              className="hover:bg-slate-200"
            >
              {Icons["Belarus"]()}
              BYN
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleChangeCurrency("RU")}
              className="hover:bg-slate-200"
            >
              {Icons["Russia"]()}
              RUB
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleChangeCurrency("PL")}
              className="hover:bg-slate-200"
            >
              {Icons["Poland"]()}
              PLN
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleChangeCurrency("US")}
              className="hover:bg-slate-200"
            >
              {Icons["USA"]()}
              USD
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleChangeCurrency("EU")}
              className="hover:bg-slate-200"
            >
              {Icons["Europian"]()}
              EUR
            </Dropdown.Item>
          </Dropdown>
          <div className={`block ${styles.input}`}>
            <TextInput
              id="count"
              type="count"
              placeholder="Введите кол-во"
              required={true}
              className="w-36"
              value={inputState}
              autoComplete="off"
              onChange={handleInputChange}
            />
            <Label
              htmlFor="count"
              value="Введите сумму"
              className="float-left"
            />
          </div>
        </header>
        <main className="my-5 flex flex-col justify-between h-full">
          <CurrencyCell data={calculatedCurrenciesState} count={+inputState * currencyCalc.find((e) => e.countryCode === currencyState)!.bynExchangeRate} />
        </main>
        <footer className="text-sm text-gray-500 px-2">
          * данные по актуальному курсу НБ РБ.
        </footer>
      </main>
    </div>
  );
};

export default Form;
