// let x ={
//     key : 10
// }
// let y = x  ///it wil still point to same data . if it ios object , array,function...
//  x = 20

// console.log(y)
// console.log(x)


// let x = {
//     'key' : 10,
// }
// console.log(x);
// function inc(obj){
//     obj.key = 20
// }
// inc(x);
// console.log(x)



//////cloning an object
// let circle = {
//     rad : 10,
//     drow(){
//         console.log('drow')
//     }
// }
// let another = {}
//     for (let key in circle){
//         another[key] = circle[key]
//     }
// console.log(another);
// console.log(circle);


// let circle = {
//     radius : 10,
//     drow(){
//         console.log('drow')
//     }
// }
// let another = {}
// another = Object.assign({'gsvs' :  'Zxcvb'}, circle)
// another.radius = 20;

// console.log(circle)
// console.log(another);




/////GAURAV SIR


///////SHALLO COPY 
// let obj = {
//     name : 'rajuy',
//     problem : 'paisa'
// }
// let obj1 = obj;
// obj.name = 'Pintu';
// obj1.class = 12;
// console.log(obj); 
// console.log(obj1);




/////DEEP COPY

/////spread(...) operater

// let obj = {
//     name : 'raju',
//     problem : 'paisa'
// }

// let obj1 = {...obj}
// console.log(obj);
// console.log(obj1);

// obj1.problem = 'raju';
// console.log(obj);
// console.log(obj1);

// obj.name = 'baburao'
// console.log(obj);
// console.log(obj1);



/////assign 

// let obj = {
//     name : 'raju',
//     problem : 'paisa'
// }
// let obj1 = {}
// Object.assign(obj1,obj)
//  console.log(obj);
//  console.log(obj1);

//  obj.problem = 'baburao'
//  console.log(obj);
//  console.log(obj1);

//  obj1.village = 'rampura'
//  console.log(obj);
//  console.log(obj1);


// let raju = {
//     problem : 'peaisa',
//     age : 25 
// }
// let shyam = raju  
// raju.boss = 'baburao';
// console.log(shyam);
// console.log(raju);

// delete raju.age
// console.log(shyam);
// console.log(raju);



////for in method

// let lily = {
//     age : 18,
//     profession : 'student',
//     class : '12th'
// }
// let peter = {}
// for(key in lily){
// peter[key]= lily[key]
// }
// console.log(lily)
// console.log(peter)
// peter.frd = 'madhav, chutki'

// console.log(lily)
// console.log(peter)




// let str = 'hello mota bhai'
// let part  = str.slice(6,10)
// console.log(part);
// let part2 = str.slice(-14,-6)
// console.log(part2)


let a = '             kuch   '
let d = '             nhi '
console.log(a.concat(d))
// let b  = a.trim()
// let c= a.toLowerCase()
// console.log(b)
// console.log(c)
console.log(a.trim())
console.log(d.trim())

console.log(a.trim().concat(d.trim()))
