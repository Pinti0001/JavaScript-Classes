// let sum =- 0

// function check(n){
//     let p = false
//     for(i=2;i<n;i++){
//         if(n%i===0){
//             p = true
//         }
//     }
//     return p 
// }
// console.log(check(5))
// console.log(check(7))
// let n = 50
// for(i=2;i<n;i++){
//     if(check(i)){
//         console.log(i)
//     }
// }




// let sum = 0
//  for(let x = 1;x<=50;x++){
//     if(x%2!=0){
//          sum+=x
//     }
//  }  
// console.log(sum)




// for(let x= 1;x<=50;x++){
//     prime = false
//     for(let y = 2;y<x;y++){
//         if(x%y===0){
//             prime = true
//         }
//     }
//     if(prime){
//         console.log(x)
//     }
// }



// let sum = 0
// for(let x= 2;x<=50;x++){
//     prime = true
//     for(let y = 2;y<x;y++){
//         if(x%y===0){
//             prime = false
//         }
//     }
//     if(prime){
//         sum+=x
//     }
// }
// console.log(sum)




/////// PRIME CHECK WITH SETTER AND GETTER METHOD

let comp = {
    limit : 0,
    check(a){
        for(i=2;i<a;i++){
            if(a%i==0){
                return false;
            }
        }
        return true;
    },
    set setmax(num){
        this.limit = num 
    },
    get compsit(){
        for(let j = 2;j<=this.limit;j++){
            if(this.check(j)){
                console.log(j)
            } 
        }
    }
}
comp.setmax = 30;
comp.compsit 
