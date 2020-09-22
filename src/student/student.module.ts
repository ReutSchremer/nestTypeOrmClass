import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { SchoolClassModule } from 'src/school-class/school-class.module';
import { SchoolClassService } from 'src/school-class/school-class.service';

@Module({
  imports: [SchoolClassModule],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule { }
