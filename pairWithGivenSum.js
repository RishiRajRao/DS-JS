// const arr = [2,5,7,8,9,10,1,3,4,6,1,0]
var arr = [ 1, 5, 7, -1, 5 ]

const findPairRaw = (arr,sum) => {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i]+arr[j] === sum){
          count++;
        }
    }
  }
  return count;
}

findPairHash = (arr,sum) => {
  let hash = {},count = 0;
  for(let val of arr){
    if(hash.hasOwnProperty(sum-val)){
      count += hash[sum-val];
    }
    if(!hash.hasOwnProperty(val)){
        hash[val] = 1;
    }else{
      hash[val] += 1;
    }
    // if(hash.hasOwnProperty(sum-val)){
    //   count += hash[sum-val];
    // }
  }
  return count;
}
// const arr = [2,5,7,8,9,10,1,3,4,6,1,0]
console.log(findPairHash(arr,6))