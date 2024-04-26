// function Random(num){
//     return Math.random()*num;
// }
// console.log(Random(100))


// function checkMax(a,s,d,g){
//     return Math.max(a,s,d,g)
// }
// console.log(checkMax(1,3,5,56))


// function checkMin(a,d,g,h){
//     return Math.min(a,d,g,h)
// }
// console.log(checkMin(1,3,5,56))



// function check(a,b){
//     return Math.pow(a,b)
// }
// console.log(check(4,2))






// let x = "Hello Function Up";

// console.log(x.length);
// console.log(x.startsWith("Hello"));
// console.log(x[0]);
// console.log(x.includes("Up"));



// function fl(arr,n){
//     console.log(arr.splice(0,n))
// }
//  fl([1,2,3,4],0)


// function f(arr,n){
//     return arr.slice(0,n)
// }
// console.log(f([1,2,3,4],1))



// function c(arr,n){
//     return arr.includes(n)
// }

// console.log(c([1,2,3],5))


// function d(arr,n){
//     arr.splice(0,n)
//     return arr
// }
// console.log(d([1,2,3,4],2))




let a = [1,-5,243,-1000,0]
let pos = a.filter(
    function (e){
        return e>=0
    }
)
console.log(pos);



let x = ['apple','banana','cherry','date'];
let y = x.filter(
    function (i){
        return i.length<6
    }
)
console.log(y);




let price = [25.99,9.99,30.25,50.75];
let dis = price.map(
    function (i ){
        return i-i/10 
    }
)
console.log(dis)