const addingOne = arr => {
  var carry = 0,j = 1;
  for(let i=arr.length-1; i>=0; i--) {
      sum = arr[i]+carry + j;
      carry = Math.floor(sum/10);
      if(sum<10){
        arr[i] = sum;
      }else{
        arr[i] = sum%10
      }
      j=0;
  }
  if(carry!==0) arr.unshift(carry);
  console.log(arr);
}

addingOne([1,0,0])