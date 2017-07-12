var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function calculateGrades(scores) {
  return Object.keys(scores).map(function(student) {
    var examCount = scores[student].scores.exams.length;
    var examsTotal = scores[student].scores.exams.reduce(function(a, b) {
      return a + b;
    });

    var examsAvg = examsTotal / examCount;

    var exercisesTotal = scores[student].scores.exercises.reduce(function(a, b) {
      return a + b;
    });

    var grade = Math.round(examsAvg * .65 + exercisesTotal * .35);
    return appendGradeLetter(grade);
  })
}

function appendGradeLetter(grade) {
  switch(true) {
    case grade > 92:
      return grade + ' (A)';
    case grade > 84:
      return grade + ' (B)';
    case grade > 76:
      return grade + ' (C)';
    case grade > 68:
      return grade + ' (D)';
    case grade > 59:
      return grade + ' (E)';
    default:
      return grade + ' (F)';
  }
}

function processExams(students) {
  var exams = [];
  Object.keys(students).forEach(function(student) {
    students[student].scores.exams.forEach(function(exam, i) {
      if (exams[i] === undefined) exams[i] = [];
      exams[i].push(exam);
    });
  });
  
  return exams.map(function(exam) {
    var min = 100;
    var max = 0;
    var total = exam.reduce(function(a, b) {
      if (b > max) max = b;
      if (b < min) min = b;
      return a + b;
    }, 0);
    var avg = total / exam.length;

    return { average: avg, minimum: min, maximum: max, }
  });
}

function generateClassRecordSummary(studentScores) {
  var studentGrades = calculateGrades(studentScores);
  var exams = processExams(studentScores);
  return { studentGrades: studentGrades, exams: exams, }
};

console.log(generateClassRecordSummary(studentScores));

// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }