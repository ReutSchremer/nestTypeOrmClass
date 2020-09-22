import { Controller, Get, Post, Body } from '@nestjs/common';
import { SchoolClassService } from './school-class.service';

@Controller('classes')
export class SchoolClassController {

    constructor(private readonly classesService: SchoolClassService) {

    }

    @Get('/')
    allCls() {
        return this.classesService.getAllClasses();
    }

    @Post('/')
    addCls(@Body('grade') grade: number, @Body('index') classIndex: number) {
        return this.classesService.createNewClass({ grade, classIndex });
    }

}
