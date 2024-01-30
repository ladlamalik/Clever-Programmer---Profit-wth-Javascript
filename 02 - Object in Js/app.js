// Object in JS

let student = {
  first: 'Nadeem',
  last: 'Ahmed',
  age: 33,
  heigh: 5.8,
  studenInfo: function(){
    return this.first + "\n" + this.last + "\n" + this.age
  }
};

// console.log(student.first);

// student.first = "not Nadeem";

// console.log(student.first);

// student.age++;

// console.log(student.age);

console.log(student.studenInfo());
