import { Injectable, Inject, Optional } from '@nestjs/common';
import { SchoolClassService } from 'src/school-class/school-class.service';
import { connect } from 'http2';

@Injectable()
export class StudentService {
    private students: Student[] = [];

    constructor(
        @Optional() private schoolService: SchoolClassService,
        // @Optional() @Inject("Roni") roni: object
    ) {




        this.students.push({ name: "Reut", lastName: "Schremer", age: 22, classId: 2 });

        setTimeout(() => {

            this.connectStudentsToClasses()
        }, 100);
    }


    connectStudentsToClasses(studentOp?: Student) {
        let cls = this.schoolService.getAllClasses();
        if (!studentOp)
            this.students.forEach(student => {
                this.connectStudent(student, cls);
            })
        else this.connectStudent(studentOp, cls);

        return this.schoolService.getAllClasses();

    }

    connectStudent(student: Student, cls) {
        if (!cls[student.classId])
            student.classId = null;

        else if (cls[student.classId].students) {
            if (!cls[student.classId].students.find(item => item.name == student.name && item.lastName == student.lastName && item.age == student.age))
                this.schoolService.addStudentsToClass([student], student.classId);
        }
        else this.schoolService.addStudentsToClass([student], student.classId);
    }

    getAllStudents() {
        return this.students;
    }

    createNewStudent(student: Student) {
        if (this.students.find(item => item.name == student.name && item.lastName == student.lastName && item.age == student.age))
            return "NO!"
        else this.students.push(student);
        this.connectStudentsToClasses(student);
    }



}


export interface Student {
    name: string;
    lastName: string;
    age: number;
    classId?: number;
}
