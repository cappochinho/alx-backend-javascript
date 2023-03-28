export default function getListStudentIds(students) {
  if (!(students instanceof Array)) {
    return [];
  }

  const ids = students.map((student) => student.id);

  return ids;
}
