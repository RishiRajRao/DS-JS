const unsorted = [2,0,4,3,7]
const sortArr = arr => {
  let j = 0;
  while(j<arr.length){
    let min = arr[j],k = j
     for(let i =j; i<arr.length;i++){
     if(min>=arr[i]){
       min = arr[i]
       k = i;
     }
    }
    [arr[j],arr[k]] = [arr[k],arr[j]]
    j++;
  }
  console.log(arr)
}

sortArr(unsorted)