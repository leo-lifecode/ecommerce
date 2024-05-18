function filterbySORT(data, sort) {
  console.log(sort);
  if (sort === "Harga Tertinggi") {
    return data.sort((a, b) => b.price - a.price);
  } else if (sort === "Harga Terendah") {
    return data.sort((a, b) => a.price - b.price);
  } else {
    return data;
  }
}

export default filterbySORT;
