function cancArr(arr1,arr2){
let addarr = arr1.concat(arr2)
console.log(addarr);

 for(let i of addarr){
       if(i.length===5){
              console.log(i)         }
     }
}
cancArr(['hello','ji','javascript'],['I','am','amazing',])