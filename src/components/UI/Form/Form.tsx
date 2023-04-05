import { FC, useEffect, useState } from "react";
import { chooses, countryCurrency } from "../../data/Types/Types";
import styles from "./Form.module.scss";
import { Dropdown, Label, TextInput } from "flowbite-react";
import { Icons } from "../Icons/Icons";
import CurrencyCell from "./CurrencyCell/CurrencyCell";

const countries = ["Belarus", "Russia", "Poland"];
const actions: {
  [key: string]: chooses;
} = {
  "Я хочу продать": "Я хочу купить",
  "Я хочу купить": "Я хочу продать",
};

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

const currencyCalc: countryCurrency[] = [{
  countryCode: "BY",
  countryName: "Belarus",
  iconCode: Icons["Belarus"],
  currencyCode: "BYN",
  dollarExchangeRate: 0.363,
},{
  countryCode: "RU",
  countryName: "Russia",
  iconCode: Icons["Russia"],
  currencyCode: "RUB",
  dollarExchangeRate: 0.01259,
},{
  countryCode: "PL",
  countryName: "Poland",
  iconCode: Icons["Poland"],
  currencyCode: "PLN",
  dollarExchangeRate: 0.2333,
},{
  countryCode: "US",
  countryName: "USA",
  iconCode: Icons["USA"],
  currencyCode: "USD",
  dollarExchangeRate: 1,
},{
  countryCode: "EU",
  countryName: "Europian",
  iconCode: Icons["Europian"],
  currencyCode: "EUR",
  dollarExchangeRate: 1.09,
}];

const Form: FC = () => {
  const [actionState, setActionState] = useState<chooses>("Я хочу продать");
  const [currencyState, setCurrencyState] =
    useState<keyof typeof currencies>("BY");
  const [calculatedCurrenciesState, setCalculatedCurrenciesState] = useState<countryCurrency[]>([]);
  const [inputState, setInputState] = useState<string>("");

  useEffect(() => {
    setCalculatedCurrenciesState(currencyCalc.filter((e) => e.countryCode !== currencyState))
  }, [currencyState]);

  function handleChangeAction(action: chooses) {
    setActionState(action);
  }
  function handleChangeCurrency(action: keyof typeof currencies) {
    setCurrencyState(action);
  }
  function handleInputChange(event: any) {
    setInputState(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div
      className={`flex h-80 w-96 ${styles.container} relative shadow flex-col`}
    >
      <header className="flex justify-center w-full h-max shadow py-2">
        <Dropdown label={actionState} color="dark">
          <Dropdown.Item
            onClick={() => handleChangeAction(actions[actionState])}
            className="hover:bg-slate-200"
          >
            {actions[actionState]}
          </Dropdown.Item>
        </Dropdown>
      </header>
      <main className="flex py-2 flex-col h-full shadow">
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
          <CurrencyCell data={calculatedCurrenciesState} count={+inputState * currencyCalc.find((e) => e.countryCode === currencyState)!.dollarExchangeRate} />
        </main>
      </main>
    </div>
  );
};

export default Form;
