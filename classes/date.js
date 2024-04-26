// let d = new Date();
// console.log(d);

// let a = new Date(0);
// console.log(a)

// console.log(Date.parse(0))
// console.log(Date.parse('2023-09-12'))
// console.log(Date.parse('1970-01-01'))
// console.log(Date.parse('1970-01-02'))
// console.log(Date.parse('1970-01-03'));


//  let d =  Date.now(0);
// console.log(d);

// let today = new Date(2023,9,12,12,11,18,19,15)
// console.log(today)
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleTimeString());


////QSTN     wjp and take 3 variables and swap there values without taking any other variable

// let a = 2;
// let b = 3;
// let c = 4;

// b = a 
// console.log(b)
// a = c
// console.log(a)
// c = b+1
// // b = 3
// // c = b

// console.log(c)


// console.log(new Date('2023-13-05'))
// console.log(new Date(2023,13,5))
// console.log(new Date(2023-13-5))



// let d = new Date(2023,8,12)
// console.log(d)
// console.log(d.getMonth())

// console.log(d.getDay())

// console.log(d.getDate())
// console.log(d.getSeconds())


// console.log(d.setMonth(2))
// //console.log(d.setDay())
// console.log(d.setDate(4))
// console.log(d);



    //let a = new Date(2023,11,31,10,61,30,10)
    // console.log(a.getFullYear())
    //    console.log(a.getMonth())
    //    console.log(a.getDate())
    //    console.log(a.getDay())
    // console.log(a.getMinutes())
    //  console.log(a.getHours())
    //  console.log(a.getDate())
    //console.log(a.getMilliseconds())


    // console.log(a);
    // a.setFullYear(3045)
    // console.log(a);
    // a.setMonth(1);
    // console.log(a);
    // a.setDate(23);
    // console.log(a);

/////new Date(year,month,day,hours,minutes,seconds,milliseconds)



/////GRP 


// let month = ['jan', 'feb','march','apr','may','jun','july','aug','sept','oct','nov','des']
// function monthname(date){
// return month[date.getMonth()];
// }
// console.log(monthname(new Date('10/11/2009')));
// console.log(monthname(new Date('11/13/2014')));



/////get age
// function calculate(birthdate){
//     let date = new Date(birthdate);
//     let today = new Date();
//     return today.getFullYear()- date.getFullYear()
// }
// console.log(calculate('2000-05-15'))





let a = new Date(2023,09,01);
console.log(a)
a.setFullYear(2020)
console.log(a);