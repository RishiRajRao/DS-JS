function findPair(arr) {
  const map = new Map();
  let pair = 0;
  for (let val of arr) {
    if (!map.has(val)) {
      map.set(val, 1);
    } else {
      map.set(val, map.get(val) + 1);
    }
  }
  for (let [key, val] of map.entries()) {
    pair += Math.floor(val / 2);
  }

  return pair;
}

var result = findPair(["a", "b", "c", "a", "b", "e", "e"]);
alert(result);
