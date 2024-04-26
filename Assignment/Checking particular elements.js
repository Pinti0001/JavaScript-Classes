//array of ages
const ages = [25,30,19,21,19]
// Function to check if all ages are above 18 using every
function areAllAgesAbove18(ageArr){
    return ageArr.every(
        function (e){
            return e>18
        }
    )
}
// Function to check if at least one ages is above 18 using some 
function isAtLeastOneAgeAbove18(ageArr){
    return ageArr.some(
        function (e){
            return e>18
        }
    )
}
console.log(areAllAgesAbove18(ages))
console.log(isAtLeastOneAgeAbove18(ages))