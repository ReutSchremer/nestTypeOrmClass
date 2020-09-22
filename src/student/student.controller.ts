import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService, Student } from './student.service';
import { SchoolClassService } from 'src/school-class/school-class.service';

@Controller('students')
export class StudentController {


    constructor(private readonly studentServie: StudentService,
        private schoolService: SchoolClassService,
    ) { }

    @Get('/connect')
    order() {
        return this.studentServie.connectStudentsToClasses();
    }

    @Get('/')
    allSt() {
        return this.studentServie.getAllStudents();
    }

    @Post()
    newStudent(@Body() student: Student) {
        this.studentServie.createNewStudent(student);
    }

}
