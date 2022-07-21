import { BikeStatus } from "src/bikes/bikes.status.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bike {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	price: number;

	@Column()
	maker: string;

	@Column()
	status: BikeStatus;

	@Column()
	createdAt: string;

	@Column()
	updatedAt: string;

}