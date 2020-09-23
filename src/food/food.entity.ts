import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Food {

    @PrimaryGeneratedColumn()
    id?: number

    @Column({
        nullable: false,
        default: "hello world",
        length: 35,
        unique: true
    })
    name: string

}