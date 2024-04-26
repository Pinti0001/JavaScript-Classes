function sum(...number){
let add = number.reduce(
    function (acc,cur){
        return acc+cur;
    }
)
return add;
}
console.log(sum(1,2,3))
console.log(sum(10,20,30,40))