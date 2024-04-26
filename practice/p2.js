// function fac(a){
//     let f = 1
//     if(a>=0){for(i=1;i<=a;i++){
//         f*=i 
//     }
//     return f }
// }
// console.log(fac(5))


// function fac(a){
//     let f = 1
//     if(a>=0){
    // let i = 1
//     while(i<=a){
    
//         f*=i 
//         i++
//     }
//     return f }
// }
// console.log(fac(5))


// function fac(a){
//     let f = 1
//     if(a>=0) {
//         let i =1
//     do{
//         f*=i
//         i++
//     }while(i<=a)
//     return f
// }

// }
// console.log(fac(5))

// function fac(a){
//     let f = 1
//         let i =1
//     if(a>=0){do{
//         f*=i
//         i++
//     }while(i<=a)
//     return f
// }

// }
// console.log(fac(-5))



//  let arr = [1,2,3,7,5,9,-10]
//  let check = arr.every(
//    function (a){
//         let p = true
//         for(i=2;i<a;i++){
//          if(a%i===0){
//                p = false
//             }
//         }
//         return p 
//      })
    
    
//   console.log(check)



//   let arr = [1,2,3,7,5]
//   let check = arr.every(
//       function (a){
//         if (a<2){ return  }
//         else{
//             let p = true
//             for(i=2;i<a;i++){
//               if(a%i===0)  p = false
              
                 
//             }
//           return p 
//         }
//       }
//   )
//   console.log(check)
  

// let str = 'hello'
// let st = str.split('').reverse().join('')                                
// console.log(st)

// function d(str){
//     let a = str.split('')
//     let b = []
//     for(i=0;i<a.length;i++){
//           b.push(a[i]+a[i])
//     }
//     return b.join('')
// }
// console.log(d('pintu'))
 
// function fizzBuzz(n){
//     for(i=1;i<=n;i++){
//         if(i%3===0 && i%5==0){
//             console.log("FizzBuzz")}
//         else if(i%3===0){
//             console.log( "Fizz")
//         continue
//         }
//         else if(i%5===0){
//             console.log("Buzz")
//         continue
//         }
        
        
    
//         else{
//             console.log(i)
//         }
        
//     }
// }
//  fizzBuzz(15)
 
// function print(s){
//     let number=[]
//     for(i=1;i<=s;i++){
//         console.log(i) 
//         }}
// console.log(print(15))


// function minMax(arr){
//     let ar = [...arr]
//     return ar.Math.min()+ ar.Math.max()
//   }
//   console.log(minMax([1,2,3,4,5]))


console.log(40.567%Math.floor(40.567))