function getListStudents() {
  const students = new Map();
  students.set('one', { id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  students.set('two', { id: 2, firstName: 'James', location: 'Columbia' });
  students.set('three', { id: 5, firstName: 'Serena', location: 'San Francisco' });

  return [students.get('one'), students.get('two'), students.get('three')];
}

export default getListStudents;
