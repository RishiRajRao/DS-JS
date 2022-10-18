const factorialLargeNum = num => {
  if(num===0 || num===1) return 1;
  let tempArr = [],i = 1;
  tempArr.push(1);
  while(i<=num){
    let prod = 1,carry = 0;
    for(let j = 0; j < tempArr.length; j++) {
        prod = i * tempArr[j] + carry;
        carry = Math.floor(prod/10)
        if(carry !== 0){
          tempArr[j] = prod%10
        }else{
          tempArr[j] =prod;
        }
    }
    if(carry !== 0){
      tempArr.push(carry);
      carry = 0;
    }
    i++;
  }
  return tempArr;
}

let res = factorialLargeNum(100);
res = reverse(res);
console.log(res);
//5*4*3*2*1

// normalFactorial(){
//   if(num === 0 || num === 1) {
//     return 1;
//   }else{
//     return num * factorialLargeNum(num-1)
//   }
// }