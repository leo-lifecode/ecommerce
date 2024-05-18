function filterdatabyprice(data, min, max) {
  if (min === "" && max === "") {
    return data;
  }
  const valuemin = min ? parseInt(min) : "";
  const valuemax = max ? parseInt(max) : "";

  if (valuemin > 0 && valuemax === "") return data.filter((item) => item.price >= valuemin);
  if (valuemin === "" && valuemax > 0) return data.filter((item) => item.price <= valuemax);

  return data.filter(
    (item) => item.price >= valuemin && item.price <= valuemax,
  );
}

export default filterdatabyprice;
