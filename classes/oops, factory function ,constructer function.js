// function createperson(name, gender, birthyear);
//     return {
//         'name' : name,
//         'gender' : gender,
//         birthyear : birthyear,
//         calculatteage(currentyear){
//             return currentyear -this.birthyear;
//         } 
//     };
// };
// var lily = createperson('lily','female',1995);
// var johan = createperson('johan','male',1990);
// console.log(lily)
// console.log(lily.calculatteage(2023));
// function createperson(name, gender, birthyear){
//     let p = {
//         'name' : name,
//         'gender' : gender,
//         birthyear : birthyear,
//         calculatteage(currentyear){
//             return currentyear -this.birthyear;
//         } 
//     }
//     return p;
// };
// var lily = createperson('lily','female',,1995);
// var johan = createperson('johan','male',1990);


// function person(name, gender, birthyear){
    
//         this.name = name,
//         this.gender = gender,
//         this.birthyear = birthyear,
//         this.calculatteage = function(currentyear){
//             return currentyear -this.birthyear;
//         } 
//   return this;      // return this   na likhenge top bhi chklega
// };
// var lily = new person('lily','female',1995);
// var johan = new person('johan','male',1990);
// console.log(lily)
// console.log(lily.calculatteage(2023));

// ///======GAURAV===SIR==========================================================

// let pro = {
//     name : 'fon',
//     price : 1000,
// };
// console.log(pro)
// pro.name = 'phonre';
// console.log(pro)
// delete pro.name
// console.log(pro)


// let student = {
//     name : 'rahat',
//     age : 17,
//     class : 'B.tech',
// }
// student.name = 'pintu';
// student.age = 19;
// console.log(student);
// student.subject = 'cse';
// console.log(student)

// let intro = {
//     name : 'raj',
//     class : 'B.tech',
//     show : function (){
//         console.log('hello')
//     }
// };
// console.log(intro);
// console.log(intro.show);
// console.log(intro.show());
// intro.show();

// let intro = { 
//     name : 'raj',
//     class : 'B.tec',
//     show :  function() {
//         console.log('my name is ', this.name,'and my class is',this.class)
//     }
// }
// intro.show()

// function student ( name, clas ){
//     this.Name = name,
//     this.class = clas,
//     this.show = function(){
//         console.log('hello')
//     }
    
// };
// let res = new student('raj','Btech')
// console.log(res);
// console.log(res.show());
// res.show();



// function student ( name, clas ){
//     this.Name = name,
//     this.class = clas,
//     this.show = function(){
//         console.log('my name is',this.Name,'and my class is',this.class)
//     }
// };
// let res1 = new student('raj','Btech')
// // console.log(res1);
// // console.log(res1.show());
// // res1.age = 18

// // res.show();
// console.log(res1)

// let res2 = new student('karan','M.tech')
// console.log(res2)
// res2.show()




// function myfon(name,price){
//     this.name = name,
//     this.price = price 
// }
// let fon = new myfon('vivo',16000)
// console.log(fon)
// let fon1 = new myfon('redmi',366789)
// console.log(fon1)


///////factory function

// function tv(name, price){
//     return {
//         Name : name,
//         price : price ,
//     }
// };
// let tv1 = tv('sonuy',12345)
// console.log(tv1)

// tv1.modal = '12,4,2,4'
// console.log(tv1)
// let tv2 = tv('samsung',23456789);
// console.log(tv2)        
// delete tv1.price
// console.log(tv1)



// function tv(name, price){
//     return {
//         name,
//         price ,
//     }
// };
// let tv1 = tv('sonuy',12345)
// console.log(tv1)

// tv1.modal = '12,4,2,4'
// console.log(tv1)
// let tv2 = tv('samsung',23456789);
// console.log(tv2)            
// delete tv1.price
// console.log(tv1)