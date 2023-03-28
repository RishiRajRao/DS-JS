// let arr = [12, 3, 4, 1, 6, 9],
//   sum = 24;

  let arr = [12, -5, -7, 17, -3, -9, 34 ],sum = 7

const findTriplet = (arr, sum) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let s = new Set();
    // let curr_sum = sum - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (s.has(sum - arr[i] - arr[j])) {
          result = [...result,arr[i],arr[j],sum - arr[i] - arr[j]]
        return result;
      }
      s.add(arr[j]);
    }
  }

  return [-1];
};


console.log(findTriplet(arr,sum))

