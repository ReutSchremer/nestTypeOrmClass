import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { SchoolClassModule } from './school-class/school-class.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './food/food.module';

@Module({
  imports: [StudentModule,
    SchoolClassModule,
    TypeOrmModule.forRoot()
    , FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
