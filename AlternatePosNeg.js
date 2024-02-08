//  let sampleArr = [2, 3, -4, -1, 6, -9]
//   const alternatePosNeg = (arr) => {
//   for(let i = 0; i < arr.length-1; i++) {
//    if(arr[i]*arr[i+1]<0) {
//     continue;
//   }else{
//     let j = i+1;
//     var flag = 0;
//     while(j<arr.length){
//       if(arr[i+1] * arr[j]<0){
//         [arr[i+1],arr[j]] = [arr[j],arr[i+1]]
//         flag = 1;
//         break;
//       }
//       j++;
//     }
//   }
//   if(flag===0)break;
//   }
//   return arr;
// }

// var res = alternatePosNeg(sampleArr);
// console.log(res);
// [-1,-8,-4,-6,9,0,6]


const sampleArr = [2, 0, -4, -1, 3, -12,9,8,7]

const alternateNegPos = arr => {
  for(let i= 0; i<arr.length ; i++){
    if(i%2==0 && arr[i]< 0){
      i++
    }else if(i%2!==0 && arr[i]>=0){
      i++
    }else{
      exchangePosition(i,arr)
      i++;
    }
  }
  console.log('arr==',arr)
}


const exchangePosition = (i ,arr) => {
          console.log('iniArr==' ,arr[i],arr)

  for(let j=i+1 ; j<arr.length ; j++){
    if((arr[i]>= 0 && arr[j]<0) || (arr[i]<0 && arr[j]>=0) ){
        while(j>i){
          console.log('exeAr==' ,arr[i], arr[j] ,arr)
          let temp = arr[j]
          arr[j] = arr[j-1]
          arr[j-1] = temp
          j--;
        }
       return 
    }
  }
}

alternateNegPos(sampleArr) 




