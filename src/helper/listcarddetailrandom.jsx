function listcarddetailrandom(data, num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(data[Math.floor(Math.random() * data.length)]);
  }
  return arr;
}

export default listcarddetailrandom;
