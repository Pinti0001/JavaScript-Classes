function assignGrades(students){
    if(students.score>=90){
        students.Grade = 'A'
        return 'Name:'+' '+students.name+', '+ ' Grade: '+' '+students.Grade
    }
    else if(students.score>=80){
        students.Grade = 'B'
        return 'Name:'+' '+students.name+', '+ ' Grade: '+' '+students.Grade
    }
    else if(students.score>=70){
        students.Grade = 'C'
        return 'Name:'+' '+students.name+', '+ ' Grade: '+' '+students.Grade
    }
    else{
        students.Grade = 'D'
        return 'Name:'+' '+students.name+', '+ ' Grade: '+' '+students.Grade
    }
}
const studentData = [
    {name: 'alice',score: 88},
    {name: 'bob',score: 92},
    {name: 'charlie',score: 75},
    {name: 'david',score: 64}
]
const gradedstudents = studentData.map(assignGrades);
console.log(gradedstudents);


// const studentData = [
//     {name: 'alice',score: 88},
//     {name: 'bob',score: 92},
//     {name: 'charlie',score: 75},
//     {name: 'david',score: 64}
// ]
// const gradedstudents = studentData.map(
//     function (i){
//         if(i.score>=90){
//             i.Grade = 'A'
//             return 'Name:'+' '+i.name+', '+ ' Grade: '+' '+i.Grade
//         }
//         else if(i.score>=80){
//             i.Grade = 'B'
//             return 'Name:'+' '+i.name+', '+ ' Grade: '+' '+i.Grade
//         }
//         else if(i.score>=70){
//             i.Grade = 'C'
//             return 'Name:'+' '+i.name+', '+ ' Grade: '+' '+i.Grade
//         }
//         else{
//             i.Grade = 'D'
//             return 'Name:'+' '+i.name+', '+ ' Grade: '+' '+i.Grade
//         }
//     }
// )
// console.log(gradedstudents);