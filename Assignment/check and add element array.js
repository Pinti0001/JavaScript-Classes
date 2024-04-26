function checkAddElements(arr,ele){
if(arr.includes(ele)===false){
   arr.unshift(ele)
   return arr;
}
else {
    return  'element is already available in the given array'

}
};
console.log(checkAddElements([1,2,3,4,5],6))
console.log(checkAddElements([1,2,3,4],1))