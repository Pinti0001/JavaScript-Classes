// let obj = {
//     'my name' : 'puygbn',
//      age : 123
//  }
//  for(i in obj){
//      console.log(obj[i], i)   //// /  i is always stgring
//  }
//  console.log(obj['my name'])
//  console.log(obj['my name '])
//  console.log(obj["name"])




function printFibonacci(n) {
    let fibArray = [0, 1];
    
    for (let i = 2; i < n; i++) {
    let nextFib = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(nextFib);
    }
    
    console.log(fibArray.join(', '));
    }
    printFibonacci(10); 

