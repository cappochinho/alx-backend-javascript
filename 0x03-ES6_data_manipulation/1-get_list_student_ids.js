export default function getListStudentIds(arr) {
  if (!(arr instanceof Array)) {
    return [];
  }

  const output = [];
  for (const element of arr) {
    output.push(element.id);
  }
  return output;
}
