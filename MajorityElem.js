
const findMajorElem = arr =>{
  if(!arr.length)return;
  arr.sort((a,b)=>a-b);
  let mid = arr[Math.floor(arr.length/2)],count=0;
  for(ele of arr){
    console.log(ele)
    if(mid===ele)count++;
  }
  if(count>=Math.floor(arr.length/2)+1)return mid;
  return 'Not found'
}

let res = findMajorElem([1, 3, 3, 1, 3])
console.log(res)