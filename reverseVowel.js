// const str = "abcehijkosdfu"

// const isVowel = val => {
//   let vowelArr = ['a','e','i','o','u']
//   if(vowelArr.includes(val)){
//     return true;
//   }else{
//     return false;
//   }
// }

// const swap = (a,b,str) => {
//   var arr = str.split("")
//   let temp = arr[a]
//   arr[a] = arr[b]
//   arr[b] = temp
//   str = arr.join("")
//   return str;
// }

// const reverseVowel = str => {
//   let i = 0,j = str.length-1;
//   while(i!=j) {
//     if(isVowel(str[i]) && isVowel(str[j])){
//         str = swap(i,j,str);
//         i++,j--;
//     }
//     if(!isVowel(str[i]))i++;
//     if(!isVowel(str[j]))j--;
//   }
//   return str;
// }

// console.log(reverseVowel(str))

//updated
const sample = "abcehijkosdfu"

const isVowel = val => {
  let vowelArr = ['a','e','i','o','u']
  if(vowelArr.includes(val)){
    return true;
  }else{
    return false;
  }
}

const reverseVowel = str => {
	let idxBox = [] ,reversed = ''
  for(let i = 0; i<str.length;i++){
  	if(isVowel(str[i])){
    	idxBox.push(str[i])
    }
  }

for(let val of str){
	if(isVowel(val)){
  	reversed += idxBox.pop()
  }else{
  	reversed +=val
  }
}

console.log('revStr', reversed)

}

reverseVowel(sample)









