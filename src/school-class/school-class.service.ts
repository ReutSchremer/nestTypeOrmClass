import { Injectable } from '@nestjs/common';
import { Student } from 'src/student/student.service';

type ClassesDB = { [key: number]: SchoolClass };

@Injectable()
export class SchoolClassService {
    private classes: ClassesDB = {};
    private idIndex = 2;


    constructor() {
        this.classes[1] = { grade: 2, classIndex: 2 }
        this.classes[2] = { grade: 1, classIndex: 2 }

        console.log("const")
    }

    createNewClass(newClass: SchoolClass): "GREAT!" | "Not great" {

        let existsC = Object.values(this.classes).some(value => {
            if (value.grade === newClass.grade && value.classIndex === newClass.classIndex)
                return true;
            else return false;
        })

        if (!existsC) {
            this.classes[++this.idIndex] = newClass;
            return "GREAT!"
        }
        else return "Not great"
    }

    addStudentsToClass(students: Student[], classId: number) {
        if (this.classes[classId]) {
            if (this.classes[classId].students) {
                this.classes[classId].students = this.classes[classId].students.concat(students);
            }
            else this.classes[classId].students = [...students];
        }
    }

    getAllClasses() {
        return this.classes;
    }

}

export interface SchoolClass {
    grade: number,
    classIndex: number,
    students?: Student[]
}