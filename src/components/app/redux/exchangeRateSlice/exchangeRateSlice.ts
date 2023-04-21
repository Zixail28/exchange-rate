import { createSlice } from "@reduxjs/toolkit";
import { countryCodeType, countryCurrency } from "../../../data/Types/Types";

interface IInitialState {
  currency: countryCodeType,
  input: string,
  calculatedCurrencies: countryCurrency[],
  position: {
    x: number,
    y: number,
  },
}

const initialState: IInitialState = {
  currency: "BY",
  input: "",
  calculatedCurrencies: [],
  position: {
    x: 10,
    y: 10,
  },
}

export const exchangeRateSlice = createSlice({
  name: "exchangeRate",
  initialState,
  reducers: {
    setCurrencyState: (state, action) => {
      state.currency = action.payload;
    },
    setInputState: (state, action) => {
      state.input = action.payload;
    },
    setCalculatedCurrenciesState: (state, action) => {
      state.calculatedCurrencies = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    }
  }
});

export default exchangeRateSlice.reducer;