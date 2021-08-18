export function loadCurrency() {
  const data = localStorage.getItem("currency");
  const parsedData = JSON.parse(data) ?? "SEK";
  return parsedData;
}

export function saveCurrency(item) {
  localStorage.setItem("currency", JSON.stringify(item));
}
