import { countryCurrency } from "../Types/Types";
import { instance } from "../api/axios";

export async function exchangeRate(currencyCode: string) {
  const { data } = await instance.get(`${currencyCode}?parammode=2`);
  return data.Cur_OfficialRate / data.Cur_Scale;
}

export const currencyList: countryCurrency[] = [
  {
    countryCode: "BY",
    countryName: "Belarus",
    currencyCode: "BYN",
    currencySymbol: "BYN",
    bynExchangeRate: 1,
  },
  {
    countryCode: "RU",
    countryName: "Russia",
    currencyCode: "RUB",
    currencySymbol: "\u20BD",
    bynExchangeRate: await exchangeRate("rub"),
  },
  {
    countryCode: "PL",
    countryName: "Poland",
    currencyCode: "PLN",
    currencySymbol: "\u007A\u0142",
    bynExchangeRate: await exchangeRate("pln"),
  },
  {
    countryCode: "US",
    countryName: "USA",
    currencyCode: "USD",
    currencySymbol: "\u0024",
    bynExchangeRate: await exchangeRate("usd"),
  },
  {
    countryCode: "EU",
    countryName: "Europian",
    currencyCode: "EUR",
    currencySymbol: "\u20AC",
    bynExchangeRate: await exchangeRate("eur"),
  },
];