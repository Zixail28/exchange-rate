export type chooses = "Я хочу продать" | "Я хочу купить";
export type countryCurrency = {
  countryCode: string;
  countryName: string;
  iconCode: () => JSX.Element;
  currencyCode: string;
  dollarExchangeRate: number;
};
