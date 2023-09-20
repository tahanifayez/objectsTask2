const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

/**********
Question 1:
You have a function getStudentName(student) that:
- receives a student object
- returns the name of the student
Don't forget to uncomment the console.log
===
ANSWER: Alice
**********/

function getStudentName(student) {
  // Your code here
  return student.name;
}
console.log(getStudentName(students[0]));

/**********
  Question 2:
  You have a function that:
  - recieves a student object
  - recieves a course index (number)
  - returns the course at the specified index in the student's courses array
	===
	ANSWER: Music
  **********/

function getCourse(student, courseIndex) {
  // Your code here
  return student.courses[courseIndex];
  //   students.forEach(
  //     (course) => {
  //       if (course.courses == "Music") console.log(course.indexof("Music"));
  //     } // method course
  //   ); // end foreach
} // end getCourse
console.log(getCourse(students[4], 2));

/**********
  Question 3:
  addCourseToStudent(student, course):
  - recieves a student object
  - recieves a course name (string)
  - adds the course to the student's courses array
  - returns the student object
	===
	ANSWER: 
	{
	  id: 8,
	  name: 'Helen',
	  courses: [ 'History', 'Art', 'PE', 'Physics' ]
	}
	**********/

function addCourseToStudent(student, course) {
  // Your code here
  student.courses.push(course);
  return student;
}

console.log(addCourseToStudent(students[7], "Physics"));

/**********
  Question 4:
  countCourses(student):
  - recieves a student object
  - returns the number of courses the student is enrolled in
	===
	ANSWER: 4
  **********/
function countCourses(student) {
  // Your code here
  // let count = 0;
  // student.courses.forEach((num) => num.count);
  // student.courses.length;
  return student.courses.length;
}
console.log(countCourses(students[1]));

/**********
  Question 5: 🌶️🌶️
  listAllCourses(students):
  - recieves an array of student objects
  - returns an array of all unique course names across all students
	===
	ANSWER: 
	[
	  'Math',    'Science',
	  'History', 'English',
	  'Art',     'Music',
	  'PE'
	]
  **********/
function listAllCourses(students) {
  let arrunique = [];
  students.forEach(
    (student) =>
      student.courses.forEach((course) => {
        if(!arrunique.includes(course)){
          arrunique.push(course);
        }
       
      }) // int
  ); // outer foreach
  return arrunique;
}
console.log(listAllCourses(students));

/**********
  Question 6:
  removeCourseFromStudent(course, student):
  - recieves a student object
  - recieves a course name (string)
  - removes the course from the student's courses array
  - returns the student object
  ===
  ANSWER:
  { id: 7, name: 'Grace', courses: [ 'Math', 'English', 'Music' ] }
  **********/

function removeCourseFromStudent(student, course) {
  // students.student.forEach((course)=>if(course.courses=))
  student.courses = student.courses.filter((c) => c != course);
  return student;
}
console.log(removeCourseFromStudent(students[6], "Science"));

/**********
  Question 7:
  findStudentById(studentId, students):
  - recieves a student id (number)
  - recieves an array of student objects
  - returns the student object with the matching id
  ===
  ANSWER: { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
  **********/

function findStudentById(studentId, students) {
  return students.filter((ID) => ID.id == studentId);
}

console.log(findStudentById(10, students));

/**********
  Question 8: 🌶️🌶️🌶️
  getStudentsByCourse(course, students):
  - recieves a course name (string)
  - recieves an array of student objects
  - returns an array of student objects who are enrolled in the specified course
  ===
  ANSWER:
  [
  {
    id: 3,
    name: 'Charlie',
    courses: [ 'Science', 'English', 'Music' ]
  },
  { id: 5, name: 'Eva', courses: [ 'Science', 'Math', 'Music' ] },
  {
    id: 7,
    name: 'Grace',
    courses: [ 'Math', 'Science', 'English', 'Music' ]
  },
  { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
]
  **********/

function getStudentsByCourse(course, students) {
  const newArray = students.filter((std) => std.courses.includes(course));
  return newArray;
}

console.log(getStudentsByCourse("Music", students));
