
// function calculateInventoriyvalue(accumulator,products){
// return accumulator+products.price 
// }
// const inventory = [
//     {name: 'laptope', price: 800},
//     {name: 'phone', price: 600},
//     {name: 'tablet', price: 300}
// ]
// const totalValue = inventory.reduce(calculateInventoriyvalue,0) 
// console.log(totalValue);

// let arr = [
//     {name: 'df', age: 34},
//     {name: 'wer', age: 65}
// ]
// let a = arr.every(
//     function (a){
//         return a==2
//     }
// )
// console.log(a)

const inventory = [
    {name: 'laptope', price: 800},
    {name: 'phone', price: 600},
    {name: 'tablet', price: 300}
]
let a = inventory.reduce(
    function (acc,cur){
        return acc+cur.price;
    },0
)
console.log(a)
function check(a){
    return a.price>300
}
let newarr = inventory.filter(check)
console.log(newarr)

function day(x){
    switch(x){
        case 0 : return 'weekend';
        case 6: return ' weekend';
        default : return 'weekday'
    }
}
console.log(day(5))