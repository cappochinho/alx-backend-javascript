const express = require('express');
const countStudent = require('./3-read_file_async');

const app = express();
const DB = process.argv[2];

app
  .get('/', (req, res) => res.send('Hello Holberton School!'))
  .get('/students', async (req, res) => {
    try {
      const retValue = await countStudent(DB);
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      const students = retValue.fieldList;
      res.write(`Number of students: ${retValue.total}\n`);
      for (const key in students) {
        if (key in students) {
          res.write(`Number of students in ${key}: ${students[key].count}. List: ${students[key].namesList.join(', ')}`);
          if (key !== Object.keys(students)[Object.keys(students).length - 1]) {
            res.write('\n');
          }
        }
      }
      res.end();
    } catch (err) {
      res.statusCode = 404;
      res.write('This is the list of our students\n');
      res.end(err.message);
    }
  }).listen(1245);

module.exports = app;
