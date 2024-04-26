function manipulatestudentinfo(student){
    let grades = [85,90,78,92,88];
    let totalg = 0;
    for (let i =0;i<grades.length;i++){
        totalg+=grades[i] /// totalg = totalg+grade[i]
    };
    let avg = totalg/grades.length;

    let studentcopy = {...student}
    delete studentcopy.grades;

    student.averagegrade = avg;

    return [student,studentcopy]
};
const student = {
    name : 'Pintu',
    age : 19,
    grades : [85,90,78,92,88],
    City : 'JODHPUR'
};
const [modifystudent, studentcopy] = manipulatestudentinfo(student);
console.log(modifystudent);
console.log(studentcopy);