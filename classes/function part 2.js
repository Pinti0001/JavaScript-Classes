// try {
    
//    throw"oops"
    
// }catch (msg) {
//     console.log(msg);
    
// }finally{
//     console.log('namee')
// }


// function trycatch(username){
//     try{
//         if(username===null||username.length===0){
//             throw 'invalid name'
//         }
//     }catch(msg){
//         console.log('error occur:',msg)
//     }finally{
//         console.log('finally')
//     }
// }
// trycatch('pintu');

// function tryCatchTest(username) {
//     try {
//       if (username === undefined || username.length === 0) {
//         throw "Invalid user name";
//       }
//       console.log("Hello " + username);
//       return 1;
//     }catch(message) {
//       console.log("Error occured " + message)
//     }
//     finally {
//       console.log("finally");
//     }
//   }
  
//   tryCatchTest("Mani")





//   let name3 = "test";
// var name2 = "test";

// {
//   console.log(name1); // test
//   console.log(name2); // test
//   console.log(name3); // test
// }


// {
//     name1 = "test";
// }
// console.log(name1); // test
// {
//     var name2 = "test";
// }
// console.log(name2); // test
// {
//     let name3 = "test";
// }
// console.log(name3); // reference error


////GAURAV SIR
//////try and catch , throw , finally

// try {
//     let a = 2;
//     let b = 0;
//     if (b==0) {
//         throw new Error('we can not divide with 0')
//     }
// }
// catch (error){
//     console.log(error.message);
//     console.log(error.name);
// }
// finally{
//     console.log('code has excuted')
// }


//////old method
// try {
//     let a = 2;
//     let b = 0;
//     if (b==0) {
//         throw 'we can not divide with 0'
//     }
// }
// catch (error){
//     console.log(error);
// }
// finally{
//     console.log('code has excuted');
// }


// try {
//     add();
// }
// catch(error) {
//  console.log(error.message)
// }
// finally{
//     console.log('dfg')
// }

////add()////ise run krne r hmara sever (laptop) crash ho jayega 

// function checkname(name){
//     try { 
//         if (name==undefined||name==null||name.trim()==''){
//            throw new Error('name is not valid')
//         }   
//     }
//     catch (error) {
//         console.log(error.message)
//     }
//     finally {
//         console.log('experiment succesful')
//     }
//     console.log(name)
// }
// checkname('Pintu')
// checkname()



// function checkname(name){
//     try { 
//         if (name==''||name==undefined||name==null){
//            throw new Error('name is not valid')
//         }    console.log('wlcm',name);
//     }
//     catch (error) {
//         console.log(error.name+' = '+error.message)
        
//     }
//     finally {
//         console.log('experiment succesful')
//     }
   
// }
// checkname('Pintu')
// checkname('')



////  Local vs Global 

// let b = 'hey'//// it is a global property
// {
//     let a = 'heelo pazzi'/// it is a local property
// console.log(b)
// console.log(a)
// }



///// LET VS VAR

// {
//     var a = 'I am a global'
// }
//console.log(a)


// let a = 5
// let a = 6
// console.log(a);

// var a = 5
// var a = 6
// console.log(a);


// const a = 5;
// a = 6;
// console.log(a)//// assignment to constant variable





///// GETTER AND SETTER 


// let person = {
//     name : 'Pintu',
//     birthyear : 2004
// }
// let currentyear = 2023;
// let age = currentyear-person.birthyear;
// console.log(age);


// let p = {
//     name : 'gh',
//     birth : 2004,
//     get Fullage(){
//         return 2023 -this.birth;
//     }
// }
// console.log(p.Fullage)


// function add(name){
//     console.log(name)
// }
// add() ///undefine


// let std = {
//     firstname : 'Vikash',
//     lastname : 'Choudhary',
//     fullname : function (){
//         return (`${this.firstname} ${this.lastname}`)
//     }
    
// }
//console.log(`${std.firstname} ${std.lastname}`)
//console.log(std.fullname())


// let std = {
//     firstname : 'Vikash',
//     lastname : 'Choudhary',
    
//     fullname() {
//          console.log(`${this.firstname} ${this.lastname}`)
//     }
// }
// std.fullname()


// let std = {
//     firstname : 'Vikash',
//     lastname : 'Choudhary',
    
//     get fullname() {
//          console.log(`${this.firstname} ${this.lastname}`)
//     }
// }
// std.fullname

// let std = {
//     firstname : 'Vikash',
//     lastname : 'Choudhary',
    
//     get fullname() {
//          console.log(`${this.firstname} ${this.lastname}`)
//     }
// }
// std.firstname = 'Pintu'
// std.fullname



// let std = {
//     firstname : 'Vikash',
//     lastname : 'Choudhary',
    
//     set fullname (name) {
//          namearr = name.split(' ')
//          this.firstname = namearr[0]
//          this.lastname = namearr[1]
//     },
//     get fullname(){
//         console.log(`${this.firstname} ${this.lastname}`)
//     }
// }

// ///std.fullname
// std.fullname = 'Pintu Kumar'
// std.fullname



let std = { 
    age : 10,
    set setage(newage){
        this.age = newage
    },
    get getage(){
        console.log(this.age)
    }
}
std.setage = 20;
std.getage 




/*let cube = {
    length : '',
    set side(l){
        cube.length = l
    },
    get volume(){
        console.log(this.length**3)
    }
}
cube.side = 3;
cube.volume */


/*function check(n){
    let p = false
    for(i=2;i<n;i++){
        if(n%i===0){
            p = true
        }
    }
    return p 
}
console.log(check(5))
console.log(check(7))
let n = 50
for(i=2;i<n;i++){
    if(check(i)){
        console.log(i)
    }
}
*/

/*let copm = {
    low : 1,
    upp : '',
    set setupp(x){
        this.upp = x
    },
    get check(){
        
        let p = false;
        for(i=2;i<this.upp;i++){
            if(this.upp%2===0){
                p = true
            }
        }
        if(p){
            console.log(i)
        }

    }
    
}
copm.setupp = 10
copm.check */

// let s= 'qwsdtf stfg stfgh dtyv '
// let arr = s.split()
// console.log(arr);
// console.log(...arr)


// function dividenumbers(a,b){
//     try{
//         if(b===0){
//             throw new Error('divisine by zero not allowd')
//         }
//         return a/b 
//     }catch(error){
//         return error.message  
//     }
// }
// console.log(dividenumbers(10,2))
// console.log(dividenumbers(10,0))



// const car = {
//     make : 'toyota',
//     modal : 'camry',
//     year : '',
//     set yearr(y){
//             let yea = y.toString()
//             if(yea.length!=4){
//                 console.log('invalid input')
//             }else{
//                 this.year= y
//             }
        
//     },
//     get carinfo(){
//         console.log(`${car.make} ${car.modal} ${car.year}`)
//     }
// }
// car.make = 'toyotaaaaa';
// car.modal = 'camry';
// car.yearr = 22222;
// car.carinfo




// let car={
//     make:"Toyota",
//     model:"Camry",
//     set yearofcar(year){
//         let stringyear=year.toString();
//         if(stringyear.length==4){
//             this.year=year
//         }else{
//             console.log("invalid input")
//         }
//     },
//     get carinfo(){
//         if(this.year!=undefined){
//         console.log(this.make+this.model)
//         console.log(this.year)
//         }else{
//             console.log(this.make+this.model)
//         }
    
//     }
// }
// car.yearofcar=202;
// car.carinfo


// let mcar={
//     make:"Toyota",
//     model:"Camry",
//     set yearofcar(year){
//         let stringyear=year.toString();
//         if(stringyear.length==4){
//             this.year=year
//         }else{
//             console.log("invalid input")
//         }
//     },
//     get carinfo(){
//         console.log(this.make+this.model)
//         console.log(this.year)
        
//     }
// }
// mcar.yearofcar=202;
// mcar.carinfo



