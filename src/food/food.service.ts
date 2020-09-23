import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './food.entity';

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(Food)
        private readonly foodRepo: Repository<Food>
    ) {


        this.createFood({ name: "dani" })
    }

    createFood(foody: Food) {
        this.foodRepo.save(foody);
    }

}
