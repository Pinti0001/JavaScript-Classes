/*function add(a,b){
    return a+b;
}
console.log(add(5,7))

let addd = function (a,b){
    return a+b;
}
console.log(addd(3,4));*/



// console.log(z)
// var z =5 



/////rest operator

// function add(...a){
// let sum = a.reduce(addition)
// function addition(a,b){
//     return a+b;
// }
// return sum;
// }
// console.log(add(5,3,7,8,9))


// let arr = [1,2,3,4,5]
// let [a,b] = [...arr];
// console.log(a)
// console.log(b)


// let arr = [1,2,3,4,5]
// let [a,...b] = [...arr];
// console.log(a)
// console.log(b)

/////default parameter


// function name (n1='pk',n2='hhj' ){
//     console.log(`hello ${n1}`)
//     console.log(`hello ${n2}`)
// }
// name()

// function name (n1='pk',n2='dk' ){
//     console.log(`hello ${n1}`)
//     console.log(`hello ${n2}`)
// }
// name('pkj','pokj')




// function cal(principle,rate=3.5,year){
//     return (principle*rate)/(1000*year)
// }
// console.log(cal(1000,5))
// console.log(cal(1000,undefined,5))


// function getaverage(...a){
//     let sum = 0;
//     for(i of a){
//         sum+=i
//     }
//     return sum/a.length
// }
// console.log(getaverage(1,2,3))




let stdp = [
    {name : 'aviu',salary : 20},
    {name : 'pjhgf', salary : 50},
    {name : 'purnh', salary : 70}
]
function sum(std){
let res = std.reduce(add,0)
function add(a,b){
    return a+b.salary
}
return res 
}
console.log(sum(stdp))