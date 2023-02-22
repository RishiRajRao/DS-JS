let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

const changeObjToArr = obj => {
  let tempArr = [];
  for(let key in obj){
    let shortArr = []
    shortArr.push(key)
    shortArr.push(obj[key])
    tempArr.push(shortArr)
  }
  console.log(tempArr)
}

changeObjToArr(obj)


//alternative console.log(Object.entries(obj))