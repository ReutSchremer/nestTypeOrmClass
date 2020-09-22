import { Module } from '@nestjs/common';
import { SchoolClassService } from './school-class.service';
import { SchoolClassController } from './school-class.controller';

@Module({
  providers: [SchoolClassService],
  controllers: [SchoolClassController],
  exports: [SchoolClassService]
})
export class SchoolClassModule { }
