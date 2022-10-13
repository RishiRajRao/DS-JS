const arr = [1,2,3,4,5,6,7,8];
const rotateArr = (arr,d) =>{
  while(d!==0){
    let k = arr[0],j=arr.length-1;
    for(let i= 0 ;i<j ;i++){
      arr[i] = arr[i+1]
    }
    arr[j] = k
    d--;
  }
  console.log(arr);
}

rotateArr(arr,2);