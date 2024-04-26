// function obj(n,a,s,fn,lg  ){
//     return{
//         n,a,s,fn,lg 
//     }
// }
// let std1 =  obj('Pintu',19,'Math','Ram','sucess')
// let std2 =  obj('Rahat',18,'Maths','Parbhu','coder')
// let std3 =  obj('Nitish',29,'bio','Chetan','doctor')
// let std4 =  obj('Raja',15,'english','kanha','teacher')
// let std5 =  obj('Radha',19,'Math','Shyam','motivater')
// console.log(std1)
// console.log(std2)
// console.log(std3)
// console.log(std4)
// console.log(std5)





///// qstn   find largest number without using math function

// function large(arr){
//     let l = arr.sort(
//         function (a,b){
//             return b-a
//         }
//     )
//     return l[0]
// }
// console.log(large([1,3,5,7,3,2]))
// console.log(large([9,3,5,7,3,2]))
// console.log(large([1,3,5,7,3,9]))
// console.log(large([1,3,5,8,3,2]))

///// 2nd way
// function large(arr){
//     let l = arr[0];
//     for(i=1;i<arr.length;i++){
//         if(arr[i]>l){
//             l = arr[i]
//         }
//     }
//     return l 
// }
// console.log(large([1,3,5,7,3,2]))
// console.log(large([9,3,5,7,3,2]))
// console.log(large([1,3,5,7,3,9]))
// console.log(large([1,3,5,8,3,2]))



//// qstn  find peak element

// function peak(arr) {
    
//     for (i = 0; i < arr.length; i++) {
//         if (i == 0) {
//             if (arr[i] > arr[i + 1]) {
//                 return arr[i]
//             }
//         }
//         else if (i > 0 && i < arr.length - 1) {
//             if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//                 return arr[i]
//             }
//         }       
//         else if (i == arr.length - 1) {
//             if (arr[i] > arr[i - 1]) {
//                 return arr[i]
//             }
//         }
//     } 
// }
// console.log(peak([1, 2, 5, 7, 4, 7, 9]))


function peak(arr) {
    
    for (i = 0; i < arr.length; i++) {
        if (i == 0&&arr[i] > arr[i + 1]) {
            
                return arr[i]
            
        }
        
        else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                return arr[i]
        }
            
        else if (i == arr.length - 1&&arr[i] > arr[i - 1]) {
            
                return arr[i]
            
        }
    } 
}
console.log(peak([1,3,2,4,2,5]))



