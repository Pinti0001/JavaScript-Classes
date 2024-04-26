const orignalname = ['Alice','Bob','Charlie'];
const newname = [...orignalname,'David','Eve',"Frank"]
console.log(newname);
function printnamewithgreeting(name){
for(i=0;i<newname.length;i++){
    console.log('Hello,',newname[i])
}
}
printnamewithgreeting(newname)