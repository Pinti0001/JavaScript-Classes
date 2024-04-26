let number = [2,4,6,8,10,5];
let evenNumber = number.filter(
    function (ele){
        return ele%2===0
    }
)
console.log(evenNumber);