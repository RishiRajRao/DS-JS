const generateArr = (m, n) => {
  let arr =  [];
  for (i = 0; i < m; i++) {
    let tempArr = [];
    for(j= 0; j < n; j++) {
      tempArr.push(1)
    }
    arr.push(tempArr);
  }
  return arr;
};

const getMaxOneArr = (m,n) => {
  var resArr = generateArr(m,n),rowIdx = -1
  for (let i = 0  ; i < n ; i++) {
    for(let j = 0 ; j <m ; j++) {
      if(resArr[j][i] === 1) {
        rowIdx = j;
        return rowIdx;
    }
  }
}
if(rowIdx === -1) {
  return -1;
};
}



// let resArr = generateArr(4,4)
// console.log(resArr);

let res = getMaxOneArr(4,4);
console.log(res);

