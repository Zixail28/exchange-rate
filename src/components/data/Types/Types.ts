export type chooses = "Я хочу продать" | "Я хочу купить";
export type countryCurrency = {
  countryCode: string;
  countryName: "Belarus" | "Russia" | "Poland" | "USA" | "Europian";
  currencyCode: string;
  currencySymbol: string;
  bynExchangeRate: number;
};

export type countryCodeType = countryCurrency['countryCode'];