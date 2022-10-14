const frequencyArrElement = arr => {
  let tempMap = new Map();
  for(ele of arr){
    if(!tempMap.has(ele)){
      tempMap.set(ele,1)
  }else{
    let count = tempMap.get(ele)
    tempMap.set(ele,++count)
  }
}
return tempMap
}

const frequencySortedArr = arr => {
  let count = 0,temp = arr[0],tempObj = {};
  for(ele of arr){
    if(temp===ele){
      count++;
    }else{
      tempObj[temp] = count;
      temp = ele;
      count = 1;
    }
  }
  tempObj[temp] = count;
  return tempObj;
}


let res = frequencySortedArr([1,1,1,1,1,1,1,1])
console.log(res)