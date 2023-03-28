export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  const updatedStudents = filteredStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (newGrade) {
      return { ...student, grade: newGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return updatedStudents;
}
