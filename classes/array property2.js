// function sum(x, y, z) {
//     return x + y + z;
// }

// let x = [1, 2, 3];

// // Calculate sum of all elements in x?
// console.log(sum(...x));


// const arra = ['a', 'b', 'c'];

// for (let  element of arra) {
//   console.log(element);
// }

// // Expected output: "a"
// // Expected output: "b"
// // Expected output: "c"
// const array1 = ['a', 'b', 'c'];

// for (let index in array1) {
//   console.log(array1[index]);
// }

// // Expected output: "a"
// // Expected output: "b"
// // Expected output: "c"



// const elements = ['Fire', 'Air', 'Water'];

// let c = elements.join(", , qjkvbwvnjdbse ");

// console.log(c)



// const months = ['March', 'Jan', 'Feb', 'Dec'];

// months.sort();

// console.log(months); 
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]




// function isBelowThreshold(currentValue) {
//     return currentValue < 40;
// }
// const arr1 = [1, 30, 50, 29, 10, 13];

// console.log(arr1.every(isBelowThreshold)); // Expected output: true



// function isBelowThreshold(currentValue) {
//     return currentValue < 20;
// }
// const array = [1, 30, 39, 29, 10, 13];

// console.log(array.some(isBelowThreshold)); // Expected output: true


// function check(st){
//     return st.includes('st3')
// }
// let a = ['test4','test2','test3']


// console.log(a.some(check))





 ////GAURAV SIR

 
 ///spread

// let arr = [1,2,3,4,5]
// console.log(Math.max(1,2,3,4,5))
// console.log(Math.max(arr))
// console.log(arr(...arr))


// function mess(...a){
//   //  console.log('hello')
//   // console.log(a,b)
//   console.log(a)
// }
// mess(2,3)
// mess(3,5,6)
// mess(6,7,8,9)



////jion

//  let arr = ['hi','my','name','is','pk']
// console.log(arr.join('*'))
// console.log(arr.join(205))
// console.log(arr.join(' '))
// console.log(arr.join('       '))


///sort

// let arr = [1,5,6,3,2]
// console.log(arr.sort())

// let  a = [1,11,2,13,5]
// console.log(a.sort())


// let std = ['bahubli','lokesh','Kattapa',' pintu','harendra','manish','manisha','himanshi']
// console.log(std.sort())

// let c = ['A','b','a','B']
// console.log(c.sort())



// let ar = [' z','A','a','@d','=j',3,12]
// console.log(ar.sort())

//ascending in sort
let x = [1,3,21,12,11,5]
let res = x.sort(
  function  (a,b){
    return a-b 
  }
)
console.log(res)

////disendind order in sort
// let x = [1,3,21,12,11,5]
// let res = x.sort(
//   function  (a,b){
//     return b-a 
//   }
// )
// console.log(res)



/////itrate

// let arrr = ['kattpa','ne','bahubali','ko','kyun','mara']
// for(i=0;i<arrr.length;i++){
//   console.log(arrr[i])
// }


/////every

// let arr = [2,4,6,8,22,12]
// //i want to check all values are even or not 
// let res = arr.every(
//   function (e){
//     return e%2===0
//   }
// )
// console.log(res)


/////some

// let arr = [2,4,6,8,22,12,1]
// //i want to check all values are even or not 
// let res = arr.some(
//   function (e){
//     return e%2===0
//   }
// )
// console.log(res)




// function swap(a,b){
//   let c = a
//   a =b
//   b=c
//   console.log(a)
//   console.log(b)
// }
// swap(3,4)


///m1
/*function testsome(arr,b){
return arr.some(b)
}
function b(y){
  return y.length>5
}
const arr1 = ['mohanc','raju','ganga','bhk','asdg']
const arr2 = ['cat','dog','rat','bat']
console.log(testsome(arr1,b))
console.log(testsome(arr2,b))

////m2

function testsome(arr){
  return arr.some(function (b){
    return b.length>5
  })
  }
  
  const arr1 = ['mohanc','raju','ganga','bhk','asdg']
  const arr2 = ['cat','dog','rat','bat']
  console.log(testsome(arr1))
  console.log(testsome(arr2))*/