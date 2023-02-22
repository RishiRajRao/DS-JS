//shortcode for string..count the particular character
let tempStr = "Abcaadbce"

function countNumber(str){
  var countObj = {}
  for(let i = 0; i<str.length ;i++){
    if(!countObj[str[i]]){
      countObj[str[i]] = 1
      // str[i] = 1;
    }else{
      // str[i] = str[i]+1
      countObj[str[i]] = countObj[str[i]] + 1
    }
  }
  console.log(countObj)
}

countNumber(tempStr)