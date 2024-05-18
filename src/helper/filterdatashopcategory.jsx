import DataShop from "../data/DataShop";

export const filterdatashopcategory = (data, operator, sort) => {
  const sortData = (array, sortType) => {
    const sortedArray = [...array];
    if (sortType === "Harga Tertinggi") {
      return sortedArray.sort((a, b) => b.price - a.price);
    } else if (sortType === "Harga Terendah") {
      return sortedArray.sort((a, b) => a.price - b.price);
    }
    return sortedArray;
  };

  switch (operator) {
    case "PAKAIAN":
      return sort === "Relevansi"
        ? DataShop.PAKAIAN
        : sortData(DataShop.PAKAIAN, sort);
    case "CASUAL":
      return sort === "Relevansi"
        ? DataShop.CASUAL
        : sortData(DataShop.CASUAL, sort);
    case "CELANA":
      return sort === "Relevansi"
        ? DataShop.CELANA
        : sortData(DataShop.CELANA, sort);
    case "SARUNG":
      return sort === "Relevansi"
        ? DataShop.SARUNG
        : sortData(DataShop.SARUNG, sort);
    default:
      DataShop.CASUAL;
  }
};
