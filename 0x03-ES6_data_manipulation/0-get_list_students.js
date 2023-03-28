class Student {
  constructor(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
}

const one = new Student(1, 'Guillaume', 'San Francisco');
const two = new Student(2, 'James', 'Columbia');
const five = new Student(5, 'Serena', 'San Francisco');

function getListStudents() {
  return [
    { id: one.id, firstName: one.firstName, location: one.location },
    { id: two.id, firstName: two.firstName, location: two.location },
    { id: five.id, firstName: five.firstName, location: five.location },
  ];
}

export default getListStudents;
