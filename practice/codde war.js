// function minMax(arr){
//     let ar  = []
//     let mi = Math.min(...arr)
//     let max = Math.max(...arr)
//     return  
//   }
//   console.log(minMax([1,2,3,4,5]))


// function highAndLow(numbers){
//   // ...
//   let num = numbers.split(' ')
//   let arr = numbers.split(' ').map(Number);  
//   // return `${Math.max(...num)} ${Math.min(...num)}`
//   return 
  
// }
// console.log(highAndLow('1 3 5 -3 45 7'))

// function findShort(s){
//   let arr = s.split(' ').sort(function(a,b){
//      return a.length-b.length
//   })
  
//   return arr[0].length 
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'))


// function diffBig2(arr) {
//   let n = arr.sort(
//     function (a,b){
//       return a-b 
//     }
//   )
//   return n[n.length-1]-n[n.length-2]
// }
// console.log(diffBig2([1,2,4,67,5,6]))

// function diffBig2(arr) {
//   let m1 = Math.max(...arr)
//   let i =  arr.indexOf(m1)
//   let s = arr.splice(i,1)
//   let m2 = Math.max(...arr)
//   return  m1-m2
//  }
//  console.log(diffBig2([1,2,4,67,5,6]))





// function minMax(arr){
//   let ar = []
//   let mi = Math.min(...arr)
//   let ma = Math.max(...arr)
//   ar.push(mi, ma)
//    return ar 
//    }
//  console.log(minMax([45,6,89,56,3]))



// var isSquare = function(arr){
//   //Your code here
//   let s = arr.every(function(e){
//     return Math.sqrt(e)%1===0
//   })
//   return s
// }
// console.log(isSquare([1,4,9,100]))




// function squareRoot(x) {
//   //Good luck!
//   return Math.sqrt(x)
// }
// console.log(squareRoot(15))


// var number=function(array){
//   //your awesome code here
  
//     if(array.length===0){
//       return []
//     }
//     else{
//       return array.map(function(e,i){
        
//         return (i+1)+': '+e  
//       })
//     }
//   }
 
// console.log(number(['a','b','c']))



// function squareSum(numbers){
// let sum = 0
// for (i = 0;i<numbers.length;i++){
// sum+=Math.pow(numbers[i],2)
// }
// return sum 
// }
// console.log(squareSum([1,2,3]))



// function nameShuffler(str){
//     //Shuffle It
//     let arr= str.split(' ')
    
//     return ` ${arr[arr.length-1]} ${arr[0]} `
//   }
//   console.log(nameShuffler('john McClane'))

// function first(arr, n) {
//     // return arr;
//     let ar = []
//     if (n>=0){
//       for(i=0;i<n;i++){
//         ar.push(arr[i])
//       }
      
//     }
//     else {
//      ar.push(arr[0])
// }
// return ar
//   }
//   console.log(first(['a','b','c'],0))
//   console.log(first(['a','b','c'],2))
//   console.log(first(['a','b','c']))
  

//   function squareRoot(x) {
//     //Good luck!
//     return Math.pow(x,1/2)
//   }
//   console.log(squareRoot(15))


// function explode(x){
//     let ar = [];
//     for(let i =1;i<=x[1];i++){
//         ar.push(x)
//     }
//     return ar
//   }
//   console.log(explode([9,3]))




  // function towerBuilder(nFloors) {
  //   var arr = [];
  //   for (var i = 0; i < nFloors; i++) {
  //   arr.push(" ".repeat(nFloors - i - 1) + "*".repeat((i * 2)+ 1) + " ".repeat(nFloors - i - 1))
  //   }
  //   return arr;
  //   }
  //   console.log(towerBuilder(3));




  // function keepOrder(ary, val) {
  //   // your code here
  //   ary.push(val)
  //   let res = ary.sort(function(a,b){
  //     return a-b
  //   })
  //   return res.indexOf(val)
  // }
  // console.log(keepOrder([-3, -2, -2, -2, -1, 2, 2, 3, 4, 4],0))



  // function countDevelopers(list) {
  //   // your awesome code here :)
  //   let sum = 0;
  //   for(i=0;i<list.length;i++){
  //     if(list[i].language==='JavaScript'&&list[i].continent==='Europe') {
  //         sum+=1
  //     }
     
  //   }
  //   return sum
  // }
  // const list1 = [
  //   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  //   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  //   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  //   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  // ];
  // console.log(countDevelopers(list1))





  // function getAverageAge(list) {
  //   // thank you for checking out the Coding Meetup kata :)
  //   let avg = list.reduce(function(a,b){
  //     return a+b.age/list.length
  //   },0)
  //   return Math.round(avg)
  // }
  // var list1 = [
  //   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  //   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  // ];
  // console.log(getAverageAge(list1))



  // function repeatStr (n, s) {
  //   let str = '';
  //   for(i=0;i<n;i++){
  //     str+=s 
  //   }
  //   return str 
  // }
  // console.log(repeatStr(3,'*'))

  // function wave(str){
  //   // Code here'
  //   let result = [];
  //    if([...str].length === 0) return [];
  //    for(let i = 0; i < str.length; i++){
  //        let newstar = str.split('');
  //        if(newstar[i] === ' ') continue;
  //        newstar[i] = newstar[i].toUpperCase('');
  //        result.push(newstar.join(''))
  //    }
  //    return result
  // }
  // console.log(wave('hello'))






//   function lastDigitsToList(N, D) {
//   // Check for special cases
//   if (D <= 0) {
//     return [];
//   }

//   // Convert N to a string to work with its digits
//   const numStr = N.toString();

//   // Get the number of digits in N
//   const numDigits = numStr.length;

//   // Calculate the starting index to extract the last D digits
//   const startIndex = Math.max(numDigits - D, 0);

//   // Use substring to extract the last D digits and split into an array
//   const lastDigits = numStr.slice(startIndex).split('').map(Number);

//   return lastDigits
// }

// // Test cases
// console.log(lastDigitsToList(12345, 3)); // Output: [3, 4, 5]
// console.log(lastDigitsToList(987654321, 5)); // Output: [6, 5, 4, 3, 2]
// console.log(lastDigitsToList(123, 5)); // Output: [1, 2, 3]
// console.log(lastDigitsToList(456789, -2)); // Outpu
// console.log(lastDigitsToList(98764321, 5))



// function reverse(string){
//   //your code here
//   return string.split(' ').reverse().join(' ')
// }
// console.log(reverse('hello world'))

// const myArray = [1, 2, 3];
// const arrayToString = Object.prototype.toString.call(myArray);
// console.log(arrayToString);



let intValue = 42;
let str1Value = String(intValue);

let floatValue = 3.14;
let str2Value = String(floatValue);

let booleanValue = true;
let str3Value = String(booleanValue);

let arrayValue = [1, 2, 3];
let str4Value = arrayValue.toString();
console.log(str1Value)
console.log(str2Value)
console.log(str3Value)
console.log(str4Value)
