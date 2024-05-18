function sortbyFilter(operator) {
  // console.log(state.sortBy);
  switch (operator) {
    case "Relevansi":
      return "Relevansi";
    case "Harga Tertinggi":
      return "Harga Tertinggi";
    case "Harga Terendah":
      return "Harga Terendah";
    default:
      return "Relevansi";
  }
}

export default sortbyFilter;
