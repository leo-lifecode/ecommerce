import DataShop from "../data/DataShop";

export default function setProductDetail() {
  const items = [];
  for (const category in DataShop) {
    if (DataShop.hasOwnProperty(category)) {
      DataShop[category].forEach((item) => items.push(item));
    }
  }
  return items;
}
