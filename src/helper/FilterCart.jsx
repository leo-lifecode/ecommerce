function FilterCart(action, cart) {
  const filteredByColorAndSize = cart.filter(
    (item) =>
      item.color === action.color &&
      item.size === action.size &&
      item.id === action.id,
  );

  if (filteredByColorAndSize.length > 0) {
    const existingItem = filteredByColorAndSize[0];
    existingItem.quantity += action.quantity;
  } else {
    return [...cart, { ...action }];
  }

  return [...cart];
}

export default FilterCart;
