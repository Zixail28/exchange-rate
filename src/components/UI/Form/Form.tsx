import { FC, useEffect, useState } from "react";
import { countryCodeType, countryCurrency } from "../../data/Types/Types";
import styles from "./Form.module.scss";
import { Label, TextInput } from "flowbite-react";
import CurrencyCell from "./CurrencyCell/CurrencyCell";
import { currencyList } from "../../data/currency/currencyList";
import DropdownCurrencyList from "./DropdownCurrencyList/DropdownCurrencyList";

const Form: FC = () => {
  const [currencyState, setCurrencyState] =
    useState<countryCodeType>("BY");
  const [inputState, setInputState] = useState<string>("");
  const [calculatedCurrenciesState, setCalculatedCurrenciesState] = useState<
    countryCurrency[]
  >([]);

  useEffect(() => {
    setCalculatedCurrenciesState(
      currencyList.filter((e) => e.countryCode !== currencyState)
    );
  }, [currencyState]);

  function handleInputChange(event: any) {
    setInputState(event.target.value);
  }
  
  function handleChangeCurrency(action: countryCodeType) {
    setCurrencyState(action);
    setInputState("");
  }

  return (
    <div
      className={`flex h-80 w-96 ${styles.container} relative shadow flex-col`}
    >
      <main className="flex py-2 flex-col h-full shadow-2xl border-2 border-gray-800">
        <header className="flex w-full justify-around items-center">
            <DropdownCurrencyList data={currencyList} handleChange={handleChangeCurrency} state={currencyState} />
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
          <CurrencyCell
            data={calculatedCurrenciesState}
            count={
              +inputState *
              currencyList.find((e) => e.countryCode === currencyState)!
                .bynExchangeRate
            }
          />
        </main>
        <footer className="text-sm text-gray-500 px-2">
          * данные по актуальному курсу НБ РБ.
        </footer>
      </main>
    </div>
  );
};

export default Form;
