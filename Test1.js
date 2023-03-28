const func = () => {
  let str = "dknoqrtp"
var arr = str.split("")
let temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
str = arr.join("")
// [arr[0],arr[1]] = [arr[1],arr[0]]
return str;
}
console.log(func())

