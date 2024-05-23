function filterIncrementProduct(cart, action) {
  const filteredByColorAndSize = cart.find(
    (item) =>
      item.color === action.color &&
      item.size === action.size &&
      item.id === action.id,
  );

  if (filteredByColorAndSize) {
    filteredByColorAndSize.quantity += 1;
  }
  return [...cart];
}

export default filterIncrementProduct;
