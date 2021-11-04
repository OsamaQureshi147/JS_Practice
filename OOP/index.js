class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.first = first;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
      console.log("Hi! I'm " + this.name.first + ".");
    };
  }
  bio() {
    console.log(
      this.name.first +
        " " +
        this.name.last +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  }
}

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subjects) {
    super(first, last, age, gender, interests);
    this.subjects = subjects;
    this.first = "Faizan";
  }
  getName() {
    super.bio();
    console.log(super.first);
  }
}

class Admin extends Teacher {
  constructor(first, last, age, gender, interests, subjects, designation) {
    super(first, last, age, gender, interests, subjects);
    this.designation = designation;
    // this.first = "faizan";
  }
  //   getName() {
  //     // console.log(super.subjects);
  //     console.log(super.bio());
  //   }
}

// const person1 = new Person("Osama", "Ehsan", 25, "male", [
//   "games",
//   "development",
// ]);

const teacher1 = new Teacher(
  "Abdul",
  "Wahab",
  25,
  "M",
  ["Chaipi", "Playing"],
  "English"
);
// const admin1 = new Admin(
//   "Osama",
//   "Ehsan",
//   25,
//   "male",
//   ["games", "development"],
//   "qqqqq",
//   "abc"
// );
// console.log(admin1.first);
// admin1.getName();
// console.log(person1);
// console.log(Object.getPrototypeOf(teacher1));
// teacher1.bio();
// person1.bio();
// console.log(teacher1);
teacher1.getName();
