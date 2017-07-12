var studentGrades = [
  { name: 'StudentA', grade: 90.1, },
  { name: 'StudentB', grade: 92, },
  { name: 'StudentC', grade: 91.8, },
  { name: 'StudentD', grade: 95.23, },
  { name: 'StudentE', grade: 91.81, }
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
}

function sort(list, func) {
  var swapped = true;
  while (swapped === true) {
    swapped = false;
    for (var i = 0; i < Object.keys(list).length - 1; i++) {
      if (func(list[i], list[i + 1]) === 1) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        swapped = true;
      }
    }
  } 

  return list;
}

function sortGrades(studentGrades) {
  return sort(studentGrades, compareGrades);
}

console.log(sortGrades(studentGrades));