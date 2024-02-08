// const reverseWord = str => {
//     let tempStr = "",resultStr = "";
//     str  = str + " "
//     console.log("1",str.length)
//     for(let val of str){
//       if(val.charCodeAt(0)== 32){
//         resultStr += reverseString(tempStr) + " "
//         tempStr = ""
//         continue;
//       }
//       tempStr += val
//       // if(val.charCodeAt(0)== 32){
//       //   resultStr += reverseString(tempStr) + " "
//       // }
//     }
//     console.log("2",resultStr.length)
//     return resultStr;
// }

// const reverseString = str => {
//   let temp = "";
//   for(j = str.length-1;j>=0;j--){
//     temp +=str[j]
//   }
//   return temp;
// }

// // console.log(resultStr(Welcome to this Javascript Guide!))
// console.log(reverseWord("Welcome to this Javascript Guide!"))



const reverseWords = str => {
	const words  = str.split(' ').map(word=>reverse(word)).join(' ')
  console.log('words:' , words)
  return;
}

const reverse = word => {
	let i = 0 , j = word.length-1 ,str = ''
  while(j>=0){
  	str += word[j]
    j--
  }
  console.log('rev:',str)
  return str
}


reverseWords('Welcome to Game Begins')
