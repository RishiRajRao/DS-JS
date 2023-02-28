
const arr = [2,5,3,4,[1,0,3],7,[9,[2,5]]]

const flattenArr = (arr,result = [],level) => {
  // var result = []
 for(let i = 0; i < arr.length; i++) {
  let val = arr[i]
  if(Array.isArray(val) && level >=1){
    flattenArr(val,result,level-1)
  }else{
    result.push(val)
  }
 }
 return result;
}

console.log(flattenArr(arr,[],2))