function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined || this.marks == []) {
    return 0;
  } else {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  }
  const number = this.marks.length;
  const count = this.marks.reduce((acc, number) => (acc += number), 0);
  const result = count / number;
  return result;
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
};

// let newStudent = new Student("Evgeny", "Male", 26);

// newStudent.setSubject("Информатика");

// newStudent.addMarks(5, 4, 6);

// newStudent.getAverage();
