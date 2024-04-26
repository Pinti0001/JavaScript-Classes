// function car(yearofpurchage){
//     this.yearofpurchage = yearofpurchage
//     this.age = function (year ){
//         return year - this.yearofpurchage
//     };
// }
// let res = new car(2003)
// console.log(res.age(2023))




// function car (name,number,modal,color,yearofpurchage){
//     return{
//         name, number,modal,color,yearofpurchage,
//         getcarage(year){
//             return year-yearofpurchage
//         }
//     };
// };

// let c1 = car('maruti','rj19 bc 27',2023,'yello',2003);
// console.log(c1.getcarage(2023));


// function car (name,number,modal,color,yearofpurchage){
//     return{
//         name, number,modal,color,yearofpurchage,
//         getcarage : function (year){
//             return year-this.yearofpurchage
//         }
//     };
// };

// let c1 = car('maruti','rj19 bc 27',2023,'yello',2003);
// console.log(c1.getcarage(2023));


// function student (name,cityname,birthyear){
//   this.name = name;
//   this.cityname = cityname;
//   this.birthyear =birthyear
// };
// let s1 =  new student('pk','jodhpur',2004)
// let s2= new student('ho','bhopal',2005)
// let s3 = new student('jg','churu',2006)
// let s4 = new student('elvis','jaipur',2001)
// let s5 = new student('dtfgyu','dili',2000)

// let arr = [s1,s2,s3,s4,s5];
// console.log(arr)




// function student (name,cityname,birthyear){
//     this.name = name;
//     this.cityname = cityname;
//     this.birthyear =birthyear

//   };
//   let arr = [];
//   let s1 =  arr.unshift(new student('pk','jodhpur',2004))
//   let s2= arr.unshift(new student('ho','bhopal',2005))
//   let s3 = arr.unshift(new student('jg','churu',2006))
//   let s4 = arr.unshift(new student('elvis','jaipur',2001))
//   let s5 = arr.unshift(new student('dtfgyu','dili',2000))
  
//   //let arr = [s1,s2,s3,s4,s5];
//   console.log(arr)


// let std = {
//     name : 'dfghj',
//     age : 3456,
//     class : 'btech'
// }
// for(let key in std){
//     console.log(std[key]);
// }

// let fun  = {
//     pet : 'dog',
//     color : 'black',
//     age : 5
// }
// console.log('my',fun.color,fun.pet,'is',fun.age,'years old');
// console.log(`my ${fun.color} ${fun.pet} is ${fun.age} years old`);



// let obj = {
//     name1 : 'raj',
//     name2 : 'karan',
//     name3 : 'vijay'
// }

// function check(name){
// if(name===obj.name1){
//     console.log(obj.name1,': welcome sir')
// } 
// else if(name===obj.name2){
//     console.log(obj.name2,': thank you sir')
// }
// else{
//     console.log(obj.name3,': nice to meet you sir')
// }

//  }
// for (key in obj){
//    check(obj[key])
// }


// let obj = {
//     name1 : 'raj',
//     name2 : 'karan',
//     name3 : 'vijay'
// }


// for (key in obj){
// //    check(obj[key])
// if(obj[key]===obj.name1){
//     console.log(obj.name1,': welcome sir')
// } 
// else if(obj[key]===obj.name2){
//     console.log(obj.name2,': thank you sir')
// }
// else{
//     console.log(obj.name3,': nice to meet you sir')
// }

// }




// let str = 'hello';
// let arr = str.split('')
// let rev = arr.reverse()
// // console.log(str.split())
// // console.log(str.split().reverse())
// console.log(rev)
// console.log(rev.join())

// console.log(rev.join(''))

///m2
// function rev(str){
//     let res = ''
//     for(let i =str.length-1;i>=0;i--){
//         res = res + str[i]
//     }
//     return res;
// }
// console.log(rev('hello'))






let a = 5;
let b = 6;

let c = a;
 a = b
 b = c
console.log(a);
console.log(b);