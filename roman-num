function convertRoman(str) {
  const temp = new Map();
  let sum = 0;
  temp.set("I", 1);
  temp.set("V", 5);
  temp.set("X", 10);
  temp.set("L", 50);
  temp.set("C", 100);
  temp.set("D", 500);
  temp.set("M", 1000);

  for (let i = 0; i < str.length - 1; i++) {
    let a = temp.get(str[i]),
      b = temp.get(str[i + 1]);
    if (a >= b) {
      sum += a;
    } else {
      sum -= a;
    }
  }
  sum += temp.get(str[str.length - 1]);
  return sum;
}

convertRoman("MCMIV");
