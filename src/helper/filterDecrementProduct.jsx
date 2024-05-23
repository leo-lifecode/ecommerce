function filterDecrementProduct(cart, action) {
  const filteredByColorAndSize = cart.find(
    (item) =>
      item.color === action.color &&
      item.size === action.size &&
      item.id === action.id,
  );

  if (filteredByColorAndSize) {
    if (filteredByColorAndSize.quantity > 1) {
      filteredByColorAndSize.quantity -= 1;
    }
  }
  return [...cart];
}

export default filterDecrementProduct;
