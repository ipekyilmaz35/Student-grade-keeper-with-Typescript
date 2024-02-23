import { Student } from './students';
import { GradeBook } from './gradeBook';

// Creates instances of the GradeBook and Student classes
const gradeBook = new GradeBook();
const student1 = new Student("Mr. Smith");
const student2 = new Student("Ms. Johnson");

// Adds students to GradeBook
gradeBook.addStudent(student1);
gradeBook.addStudent(student2);

// Add grades to the students.
gradeBook.addGrade("Mr. Smith", "English", 70);
gradeBook.addGrade("Mr. Smith", "Science", 85);
gradeBook.addGrade("Ms. Johnson", "English", 90);
gradeBook.addGrade("Ms. Johnson", "Science", 75);

// Takes a student's gradeaverage for a course
gradeBook.getStudentAverage("Mr. Smith");

// Uses getStudent method to get all grades of a student
const studentName = "Mr. Smith";
const student = gradeBook.getStudent(studentName);
if (student) {
    console.log(`${studentName}  has an average note as: ${student.getAverageGrade()}`);
    student.grades.forEach((grade, subject) => {
        console.log(`${subject}: ${grade.join(', ')}`);
    });
} else {
    console.log(`${studentName} cannot be found in the gradebook.`);
}
