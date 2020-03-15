// The Syntax

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
/*
The method to create new objects must be called constructor
The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well
*/
// Create objects from classes
// We use the new keyword

let firstStudent = new Student('Depak', 'Borhara');
let secondStudent = new Student('Shivani', 'Borhara');

//Instance Methods
class StudentInstanceMethod {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  //Instance Method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies > 3) return `You are expelled!`;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(newScore) {
    this.scores.push(newScore);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

//Class Method
class StudentClassMethod {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  //Instance Method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  //Class Method Called on the class itself as a helper
  static enrollStudents(...students) {
    // maybe send an email here
  }
}

let firstStudents = new StudentClassMethod('Depak', 'Borhara');
let secondStudents = new StudentClassMethod('Shivani', 'Borhara');

StudentClassMethod.enrollStudents(firstStudents, secondStudents);
