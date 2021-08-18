// This is not reaxctive with the rest of the application.
// If you are already using Recoil, this is easily solvable. -1

import { useState, useEffect } from "react";
import { loadCurrency, saveCurrency } from "../services/currency";

export const load = () => {
  const data = localStorage.getItem("currency");
  const parsedData = JSON.parse(data) ?? "SEK";
  return parsedData.toString();
};

export default function Currency() {
  const [currency, setCurrency] = useState("SEK");

  const changeCurrency = (e) => {
    setCurrency(e.target.value);
    saveCurrency(currency);
  };

  // only App.jsx or major page navigation when using router should be loading and setting state
  useEffect(() => {
    setCurrency(loadCurrency());
  }, []);

  useEffect(() => {
    saveCurrency(currency);
  }, [, currency]);

  return (
    <select
      className="currency-select"
      value={currency}
      onChange={(e) => changeCurrency(e)}
    >
      <option value="SEK">🇸🇪&emsp;SEK</option>
      <option value="EUR">🇪🇺&emsp;€</option>
      <option value="GBP">🇬🇧&emsp;£</option>
      <option value="USD">🇺🇸&emsp;$</option>
    </select>
  );
}
