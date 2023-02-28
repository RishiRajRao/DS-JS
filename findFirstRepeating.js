
var arr = [2,4,5,6,2,9,5,1,6]
// const findFirstRepeating = arr => {
//   let tempObj = {}
//   for(let i of arr) {
//     if(!tempObj[i]){
//       tempObj[i] = i
//     }else{
//       return i;
//     }
//   }
// }

// const findFirstRepeating = arr => {
//   for (let i = 0; i < arr; ++i)
//   {
//       let j = abs(arr[i]);
//       arr[j] = arr[j] * -1;
//       if(arr[j]>=0) return arr[i];
//   }
//   return -1;
// } wrong solution as number ould be bigger than array size




const findFirstRepeating = arr => {
  arr.sort((a,b)=> a-b)
  for(let i = 0; i<arr.length-1; i++){
    if(arr[i] === arr[i+1]){
      return arr[i]
    }
  }
  return -1;
}

console.log(findFirstRepeating(arr))