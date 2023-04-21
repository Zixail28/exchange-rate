import { FC, useEffect } from "react";
import { countryCodeType } from "../../data/Types/Types";
import styles from "./Form.module.scss";
import { Label, TextInput } from "flowbite-react";
import CurrencyCell from "./CurrencyCell/CurrencyCell";
import { currencyList } from "../../data/currency/currencyList";
import DropdownCurrencyList from "./DropdownCurrencyList/DropdownCurrencyList";
import { useAppSelector, useAppDispatch } from "../../app/redux/hooks/hooks";
import { exchangeRateSlice } from "../../app/redux/exchangeRateSlice/exchangeRateSlice";

const Form: FC = () => {
  const { calculatedCurrencies, currency, input } = useAppSelector(
    (state) => state.exchangeRateReducer
  );
  const { setCalculatedCurrenciesState, setCurrencyState, setInputState } =
    exchangeRateSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setCalculatedCurrenciesState(
        currencyList.filter((e) => e.countryCode !== currency)
      )
    );
  }, [currency]);

  function handleInputChange(event: any) {
    if (!/[a-zA-Z]+/g.test(event.target.value)) dispatch(setInputState(event.target.value));
  }

  function handleChangeCurrency(action: countryCodeType) {
    dispatch(setCurrencyState(action));
    dispatch(setInputState(""));
  }

  return (
    <div
      className={`flex h-80 w-96 ${styles.container} relative shadow flex-col`}
    >
      <main className="flex py-2 flex-col h-full shadow-2xl border-2 border-gray-800">
        <header className="flex w-full justify-around items-center">
          <DropdownCurrencyList
            data={currencyList}
            handleChange={handleChangeCurrency}
            state={currency}
          />
          <div className={`block ${styles.input}`}>
            <TextInput
              id="count"
              type="count"
              placeholder="Введите кол-во"
              required={true}
              className="w-36"
              value={input}
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
            data={calculatedCurrencies}
            count={
              +input *
              currencyList.find((e) => e.countryCode === currency)!
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
