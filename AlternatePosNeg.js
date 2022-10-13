 let sampleArr = [2, 3, -4, -1, 6, -9]
  const alternatePosNeg = (arr) => {
  for(let i = 0; i < arr.length-1; i++) {
   if(arr[i]*arr[i+1]<0) {
    continue;
  }else{
    let j = i+1;
    var flag = 0;
    while(j<arr.length){
      if(arr[i+1] * arr[j]<0){
        [arr[i+1],arr[j]] = [arr[j],arr[i+1]]
        flag = 1;
        break;
      }
      j++;
    }
  }
  if(flag===0)break;
  }
  return arr;
}

var res = alternatePosNeg(sampleArr);
console.log(res);
// [-1,-8,-4,-6,9,0,6]