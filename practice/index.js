// let array = [1, 5, 3, 7, 15, 22, 100, 0];
// let evenNumbers = array.filter(number => number % 2 == 0);
// console.log(evenNumbers);

// var let = "anjali";
// let result = numbers.filter(number=> number % 5 ===0 || number % 3===0 );
// console.log(numbers.length);

// for (let i = 0; i < numbers.length; i++){

//     for (let j = i; i < numbers.length-i; j++) {
//         numbers[i] numbers[j] ==
//     }
// }

// function calculator(first_no, second_no, method) {
//     if(method=="add"){
//         console.log(first_no + second_no)
//     }
//     if(method=="substract"){
//         console.log(first_no - second_no)
//     }
//   }
  

//   calculator(67,23, "substract") //1 2 3 4 5 6 7 8 9 10

// let arr = [1, 5, 3, 7, 15, 22, 100, 0];
// let a=arr.map((value, index )=>{
//     console.log(value, index)
//     return value+4
// })
// console.log(a)

let arr = [1, 5, 3, 7, 15, 22, 100, 0];
const newArray = []
arr.forEach((element,index )=>{
    if(element%2 === 0)
    newArray.push(element)
})
console.log(newArray);