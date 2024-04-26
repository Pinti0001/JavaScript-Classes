// function isprime(num){
//     for(i=2;i<num;i++){
//         if(num%i===0){
//             return false
//         }
        
//     }
//     return true
// }
// for(let i=2;i<=30;i++){
//     if(isprime(i)){
//         console.log(i)
//     }
// }

function check(n){
    let p = true;
    for(i=2;i<n;i++){
        if(n%i===0){
            p = false 
        }
    }
    return p 
}
let n = 10
for(i=2;i<n;i++){
    if(check(i)){
        console.log(i)
    }
}