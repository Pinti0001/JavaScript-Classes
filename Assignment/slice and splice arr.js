function arrmethod(arr){
let a = arr.slice(2,5);
 a.splice(1,0,'hello')
return a;
};
console.log(arrmethod([1,2,3,4,5,6,7]))