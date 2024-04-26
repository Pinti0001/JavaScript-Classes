const firstname = ['Johan','Alice'];
const lastname = ['Doe', 'Smith'];
//function to combine arrays into full name
function combinename(firstnamearr,lastnamearr){
 let arr = [];
 if (firstnamearr.length==lastnamearr.length){
for (let i = 0;i<firstnamearr.length;i++){
    jointname = [firstnamearr[i],lastnamearr[i]];

    arr.push(jointname.join(' '));
}
return arr;
 }
 return "first and second array's length not same"
} 
const fullname = combinename(firstname,lastname);
console.log(fullname);


