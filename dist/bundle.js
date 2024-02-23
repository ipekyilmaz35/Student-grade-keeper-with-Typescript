/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gradeBook.ts":
/*!**************************!*\
  !*** ./src/gradeBook.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GradeBook = void 0;\n//Defines a class to manage a collection of students and their grades.\nclass GradeBook {\n    constructor() {\n        this.students = new Map();\n    }\n    // Adds a student to the grade book.\n    // If a student with the same name already exists, they will not be added again.\n    addStudent(student) {\n        this.students.set(student.name, student);\n    }\n    // Adds grades to a specific student for a specific subject\n    // If the student does not exist in the grade book, logs an error message\n    addGrade(name, subject, grade) {\n        var _a;\n        if (this.students.has(name)) {\n            (_a = this.students.get(name)) === null || _a === void 0 ? void 0 : _a.addGrade(subject, grade);\n        }\n        else {\n            console.log(`Student name ${name} not found`);\n        }\n    }\n    // Gets a student's average mark in all subjects and prints it\n    // If a subject is specified, it calculates the average for that subject only\n    // If the student is not found, logs an error message.\n    getStudentAverage(name, subject) {\n        var _a;\n        if (this.students.has(name)) {\n            const average = (_a = this.students.get(name)) === null || _a === void 0 ? void 0 : _a.getAverageGrade(subject);\n            console.log(`Average grade for ${name} ${subject ? ' in ' + subject : ''}: ${average}`);\n        }\n        else {\n            console.log(`Studet ${name} not found`);\n        }\n    }\n    // Gets a Student object by name\n    // If a student with the given name exists in the grade book, returns the Student object\n    // If no student with the given name is found, returns undefined\n    getStudent(name) {\n        return this.students.get(name);\n    }\n    // Lists all grades for a given student\n    // If the student is not found, logs an error message\n    listGrades(name) {\n        if (this.students.has(name)) {\n            const student = this.students.get(name);\n            console.log(`Grades for ${name}:`);\n            student === null || student === void 0 ? void 0 : student.grades.forEach((grades, subject) => {\n                console.log(`${subject}: ${grades.join(', ')}`);\n            });\n        }\n        else {\n            console.log(`Student ${name} not found.`);\n        }\n    }\n}\nexports.GradeBook = GradeBook;\n\n\n//# sourceURL=webpack://typescript-proje/./src/gradeBook.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst students_1 = __webpack_require__(/*! ./students */ \"./src/students.ts\");\nconst gradeBook_1 = __webpack_require__(/*! ./gradeBook */ \"./src/gradeBook.ts\");\n// Creates instances of the GradeBook and Student classes\nconst gradeBook = new gradeBook_1.GradeBook();\nconst student1 = new students_1.Student(\"Mr. Smith\");\nconst student2 = new students_1.Student(\"Ms. Johnson\");\n// Adds students to GradeBook\ngradeBook.addStudent(student1);\ngradeBook.addStudent(student2);\n// Add grades to the students.\ngradeBook.addGrade(\"Mr. Smith\", \"English\", 70);\ngradeBook.addGrade(\"Mr. Smith\", \"Science\", 85);\ngradeBook.addGrade(\"Ms. Johnson\", \"English\", 90);\ngradeBook.addGrade(\"Ms. Johnson\", \"Science\", 75);\n// Takes a student's gradeaverage for a course\ngradeBook.getStudentAverage(\"Mr. Smith\");\n// Uses getStudent method to get all grades of a student\nconst studentName = \"Mr. Smith\";\nconst student = gradeBook.getStudent(studentName);\nif (student) {\n    console.log(`${studentName}  has an average note as: ${student.getAverageGrade()}`);\n    student.grades.forEach((grade, subject) => {\n        console.log(`${subject}: ${grade.join(', ')}`);\n    });\n}\nelse {\n    console.log(`${studentName} cannot be found in the gradebook.`);\n}\n\n\n//# sourceURL=webpack://typescript-proje/./src/index.ts?");

/***/ }),

/***/ "./src/students.ts":
/*!*************************!*\
  !*** ./src/students.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Student = void 0;\nclass Student {\n    constructor(name) {\n        this.name = name;\n        this.grades = new Map();\n    }\n    // Adds a grade for the student in a specific subject\n    // If the subject does not already exist, it is created\n    addGrade(subject, grade) {\n        var _a;\n        if (!this.grades.has(subject)) {\n            this.grades.set(subject, []);\n            // Create the subject if it doesn't exist\n        }\n        (_a = this.grades.get(subject)) === null || _a === void 0 ? void 0 : _a.push(grade);\n        // Add the grade to the array for the subject\n    }\n    // Calculates the average grade for the student\n    // If a subject is specified, returns the average grade for that subject\n    // Otherwise, returns the overall average grade across all subjects\n    getAverageGrade(subject) {\n        let total = 0;\n        let count = 0;\n        if (subject) {\n            // Calculate average for a specific subject\n            const grades = this.grades.get(subject);\n            if (grades) {\n                grades.forEach(grade => {\n                    total += grade;\n                    count++;\n                });\n                return total / count;\n            }\n            return 0;\n            //If the subject is not found, return 0\n        }\n        else {\n            this.grades.forEach(grades => {\n                grades.forEach(grade => {\n                    total += grade;\n                    count++;\n                });\n            });\n            return count > 0 ? total / count : 0;\n        }\n    }\n}\nexports.Student = Student;\n\n\n//# sourceURL=webpack://typescript-proje/./src/students.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;