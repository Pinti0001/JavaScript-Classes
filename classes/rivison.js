/*let arr = [1,2,3,4,5,6,7]
for(let i of arr){
    arr.pop()
}
console.log(arr);

for(i=0;i<arr.length;i++){
    arr.pop()
}
console.log(arr)

// let len = arr.length;
// for(i=0;i<len;i++){
//     arr.pop()
// }
// console.log(arr)



let std =  {
name : 'hello',
surname : 'pintu'
}
for (key in std){
    console.log(key,std[key])
}


function std(name, age,clas){
    this.name = name;
    this.clas = clas;
    this.age = age
}
let std1 = new std('asd',3,'btech')
console.log(std1)
let std2 = new std('gfytd',45,'btech')
console.log(std2)*/


function std(name,age){
    return{
        name,age 
    }
}
let std1 = std('praksh',234)
console.log(std)
console.log(std1)