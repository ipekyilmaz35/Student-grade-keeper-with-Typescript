export class Student {
    name: string;
    grades: Map<string, number[]>;

    constructor(name: string) {
        this.name = name;
        this.grades = new Map<string, number[]>();
    }

    // Adds a grade for the student in a specific subject
    // If the subject does not already exist, it is created
    addGrade(subject: string, grade: number): void {
        if (!this.grades.has(subject)) {
            this.grades.set(subject, []);
            // Create the subject if it doesn't exist
        }
        this.grades.get(subject)?.push(grade);
        // Add the grade to the array for the subject
    }

    
    // Calculates the average grade for the student
    // If a subject is specified, returns the average grade for that subject
    // Otherwise, returns the overall average grade across all subjects
    getAverageGrade(subject?: string): number {
        let total = 0;
        let count = 0;

        if (subject) {
            // Calculate average for a specific subject
            const grades = this.grades.get(subject);
            if (grades) {
                grades.forEach(grade => {
                    total += grade;
                    count++;
                });
                return total / count;
            }
            return 0;
            //If the subject is not found, return 0
        } else {
            this.grades.forEach(grades => {
                grades.forEach(grade => {
                    total += grade;
                    count++;
                });
            });
            return count > 0 ? total / count : 0;
        }
    }
}
