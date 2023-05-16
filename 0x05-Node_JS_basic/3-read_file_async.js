const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');

        const students = lines.slice(1).map((line) => {
          const values = line.split(',');
          const student = {};
          for (let i = 0; i < headers.length; i += 1) {
            student[headers[i]] = values[i];
          }
          return student;
        });

        const fields = {};

        students.forEach((student) => {
          const { field } = student;
          if (fields[field]) {
            fields[field].count += 1;
            fields[field].list.push(student.firstname);
          } else {
            fields[field] = {
              count: 1,
              list: [student.firstname],
            };
          }
        });

        const result = Object.entries(fields).map(([field, { count, list }]) => {
          const fieldInfo = `Number of students in ${field}: ${count}. List: ${list.join(', ')}`;
          return fieldInfo;
        });

        console.log(`Number of students: ${students.length}`);
        result.forEach((fieldInfo) => console.log(fieldInfo));

        resolve();
      }
    });
  });
}

module.exports = countStudents;
