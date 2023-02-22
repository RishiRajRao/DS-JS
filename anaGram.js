const getSumStr = str => {
  let sum = 0;
  for( let j of str){
    sum += j.charCodeAt(0)
  }
  return sum;
}
const getProdStr = str => {
  let prod = 0;
  for( let j of str){
    prod += j.charCodeAt(0)
  }
  return prod;
}
const isAnagram = (str1,str2) => {
  let sumStr1 = getSumStr(str1)
  let sumStr2 = getSumStr(str2)
  let prodStr1 = getProdStr(str1)
  let prodStr2 = getProdStr(str2)

  if(sumStr1===sumStr2 && prodStr1 === prodStr2) {
    return true;
  }else{
    return false;
  }
}

console.log(isAnagram("abcd","bcad"))
// var str = "AB" ,sum = 0;
// for( let j of str){
//       sum += j.charCodeAt(0)
//     }
// console.log(sum)