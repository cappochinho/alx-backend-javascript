const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const fileData = fs.readFileSync(path, 'utf8');
  const lines = fileData.split('\n').slice(1);
  const dataFields = lines.map((line) => line.split(','))
    .filter((student) => student.length === 4);

  const students = dataFields.map((student) => ({
    firstname: student[0],
    lastname: student[1],
    age: student[2],
    field: student[3],
  }));

  const csStudents = students.filter((s) => s.field === 'CS')
    .map((s) => s.firstname);
  const sweStudents = students.filter((s) => s.field === 'SWE')
    .map((s) => s.firstname);

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
}

module.exports = countStudents;
