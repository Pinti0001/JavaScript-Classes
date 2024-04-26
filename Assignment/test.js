// let arr = [2, 4, 6, 8, 10,5];
// let evenarr = arr.filter(
//     function(a){
//         return a%2==0
//     }
// )
// console.log(evenarr)


// const Person = {
//    name: "",
//     birthYear: 0,
//     calculateAge: function() {
//     //your code   
//     let date = new date()

//     return  date.getFullyear()- this.birthYear 
//     }
//     };
//     const person1 = Object.create(Person);
//     person1.name = "Alice";
//     person1.birthYear = 1990;
//     console.log(person1.calculateAge()); 

// function gradecalculate(g){
//     if(g>=90){
//         return 'A';
//     }
//     else if(g>=80&&g<90){
//         return 'B'
//     }
//     else if(g>=70&&g<80) return 'C';
//     else if(g>=60&&g<70) return 'D';
//     else  return 'F';

// }

function first(arr,n){
    let arr1 = []
    for(i=0;i<n;i++){
        arr1.push(arr[i])
    }
    return arr1 
}
console.log(first([7, 9, 0, -2], 1));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
    
