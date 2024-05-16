import DataShop from "../data/DataShop";

export const filterdatashopcategory = (state, operator) => {
  switch (operator) {
    case "PAKAIAN":
      return DataShop.pakaian;
    case "KASUAL":
      return DataShop.Casual;
    case "CELANA":
      return DataShop.celana;
    case "SARUNG":
      return DataShop.sarung;
    default:
      return DataShop.Casual;
  }
};
