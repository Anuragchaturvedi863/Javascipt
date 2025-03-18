//Spread operator or Rest operator
//Spread operator is used for merging same array or different array
//Rest operator is used in function wherein for ex there are 3 parameters in a function but more than 3 arguments are passed
//Spread operator is denoted by three dots
//Spread operator and destructuring of array is used in react.js

let ar1=["Cybrom",26,"Milan",46]
let ar2=[2,7,10,13]
let ar3=[...ar1,...ar2]
console.log(ar3) // merging elements of two arrays in different array

let ar4=["Cybrom",26,"Milan",46]
let ar5=[2,7,10,13,...ar4]
console.log(ar5) // merging elements of two arrays in same array

let ar6=["Cybrom",26,"Milan",46]
let ar7=[2,7,...ar6,10,13]
console.log(ar7) // merged array can be in start,middle or end anywhere in second array




