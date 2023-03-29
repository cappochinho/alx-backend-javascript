interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: "Edward Junior",
  lastName: "Agyemang - Prempeh",
  age: 22,
  location: "Spintex",
}

const student_2: Student = {
  firstName: "Akua Boatemaa",
  lastName: "Bonsu",
  age: 23,
  location: "Spintex",
}

const studentsList: Student[] = [student_1, student_2];

const tableBody = document.querySelector("#studentTable tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});
