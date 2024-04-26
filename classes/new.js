//// qstn = wjsp and define two variables a & b and swap their values/

// let a =1
// b =2
// c= a
// a=b
// b=c
// console.log(a)
// console.log(b)

///m2

// let a = 1;
// let b = 2;
// a= a+b
// b = a-b
// a = a-b
// console.log(a,b)////sequence is important




/////  qstn = prime
// function check(a){
//     let p = true
//     for(i=2;i<a;i++){
//         if(a%i===0){
//             return false 
//         }
//     }
//     return p 
// }
// let n = 10
// for(j=2;j<=n;j++){
//     if(check(j)){
//         console.log(j)
//     }
// }


// ////qstn =  factorial
// function fact(a){
//     let mul = 1;
//     for(i=1;i<=a;i++){
//         mul*=i 
//     }
//     return mul;
// }
// console.log(fact(4))


//// qstn = comparision of three numbers   find greater
function g(a,b,c){
    if(a>b&&a>c){
        return a 
    }
    else if(b>a&&b>c){
        return b 
    }
    else{
    return c }
}
console.log(g(2,4,6))
console.log(g(9,4,6))
console.log(g(2,7,6))