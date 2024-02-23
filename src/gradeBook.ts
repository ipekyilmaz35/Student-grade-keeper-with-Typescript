import { Student } from "./students";

//Defines a class to manage a collection of students and their grades.
export class GradeBook {
    // A map to hold student objects, with student names as keys.
    students: Map<string, Student>;

    constructor() {
        this.students = new Map<string, Student>();
    }

    // Adds a student to the grade book.
    // If a student with the same name already exists, they will not be added again.
    addStudent(student: Student): void {
        this.students.set(student.name, student);
    }

    // Adds grades to a specific student for a specific subject
    // If the student does not exist in the grade book, logs an error message
    addGrade(name: string, subject: string, grade:number): void {
        if (this.students.has(name)) {
            this.students.get(name)?.addGrade(subject,grade);
        }else {
            console.log(`Student name ${name} not found`);
        }
    }

    // Gets a student's average mark in all subjects and prints it
    // If a subject is specified, it calculates the average for that subject only
    // If the student is not found, logs an error message.
    getStudentAverage(name: string, subject?: string): void {
        if (this.students.has(name)) {
            const average = this.students.get(name)?.getAverageGrade(subject);
            console.log(`Average grade for ${name} ${subject ? ' in ' + subject : ''}: ${average}`);
        } else {
            console.log(`Studet ${name} not found`);
        }
    }

    // Gets a Student object by name
    // If a student with the given name exists in the grade book, returns the Student object
    // If no student with the given name is found, returns undefined
    getStudent(name: string): Student | undefined {
        return this.students.get(name);
    }

    // Lists all grades for a given student
    // If the student is not found, logs an error message
    listGrades(name: string): void {
        if (this.students.has(name)) {
            const student = this.students.get(name);
            console.log(`Grades for ${name}:`);
            student?.grades.forEach((grades, subject) => {
                console.log(`${subject}: ${grades.join(', ')}`);
            });
        } else {
            console.log(`Student ${name} not found.`);
        }
    }
}