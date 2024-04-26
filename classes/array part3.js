// ////map

// let arr = [1,2,3,4,5]
// let sqrarr = arr.map(
//     function (ele){
//         return ele*ele;
//     }
// )
// console.log(sqrarr);



// let ar = ['pintu','manish']
// let hr = ar.map(
//     function (el){
//         return 'Hello '+el;
//     }
// )
// console.log(hr);



// let std = [
//     {
//         name : 'abhijit',
//         lstn  : 'khokhar'
//     },
//     {
//         name : 'adnan',
//         lstn : 'khan'
//     }
// ]
// let nam = std.map(
//     function (v){
        
//         return v.name+" "+v.lstn
//     }
// )
// console.log(nam)







/////filter

let arr = [1,2,3,4,5,6,7];
let evenarr = arr.filter(even);
function even(i){
    return i%2==0
}
console.log(evenarr);


/*let ar = ['ram','shyam','kaku'];
let x = ar.filter(
    function (v){
        return v.length>=4
    }
)
console.log(x);*/




/////   reduce 


/*let arr = [1,2,3,4,5,6];
let sumarr = arr.reduce(sum,0)

function sum(a,b){
    return a+b;
}
console.log(sumarr);



let x = ['pkj','hfu','wert'];
let y = x.reduce(
    function (a,b){
        return a+' '+ b;
    }
)
console.log(y)





let std = [
    {
        name : 'abhijit',
        lstn  : 'khokhar'
    },
    {
        name : 'adnan',
        lstn : 'khan'
    },
    {
        name : 'pintu',
        lstn : 'pk'
    }
]
let nam = std.reduce(
    function (v,w){
        
        return  v.name+" "+v.lstn+'💏 '+w.name+' '+w.lstn
    }
)
console.log(nam)*/






