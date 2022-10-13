// Write a code to compress a string with the number of consecutive characters in the string. For example AABBBCAADDDD -> 2A3B1C2A4D


const NumOfChar = str => {
  let tempStr = '';
  var j = str[0],count = 0;
  for(let i = 0; i<str.length;i++){
    if(str[i] !== j){
      tempStr += count+j;
      count = 0;
    }
    count++;
    j=str[i]

  }
  console.log(tempStr + count + j)
}

NumOfChar('AABBBCAADDDD')