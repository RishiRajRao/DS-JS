const productArr = arr => {
  let product = 1,count = 0,tempArr = Array(arr.length).fill(0);
 for(ele of arr){
  if(ele===0){
    count++;
    continue;
  }
  product = product * ele
 }
 if(count>1){
  return tempArr;
 }else{
  for(let i = 0;i<arr.length;i++){
    if(arr[i]===0){
      tempArr[i] = product;
  }else{
    if(count==1){
      tempArr[i] = 0
    }else{
      tempArr[i] = product/arr[i]
    }
  }
 }
 return tempArr;
}
}

let res = productArr([1,1,1,1,1])
console.log(res);
// [1,2,6,24,30] [5,20,60,120,1]