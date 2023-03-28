// const arr = [12, 11, -13, -5, 6, -7, 5, -3, -6]
const arr = [4,5,2,1,0]
// -13 -5 -7 -3 -6 12 11 6 5 

// arr.sort((a,b)=>a-b)
// console.log(arr)

const shift = (arr,i,j) => {
  let k = i;
  while(k>j){
    [arr[k],arr[k-1]] = [arr[k-1],arr[k]]
    k--;
  }
}
const arrangeNegPos = arr => {
  for(let i = j = 0; i < arr.length; i++){
    if(arr[i]>=0){
      continue;
    }else{
      shift(arr,i,j)
      j++;
    }
  }
  return arr;
}

console.log(arrangeNegPos(arr))