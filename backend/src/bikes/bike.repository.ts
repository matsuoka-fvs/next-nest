import { Bike } from "src/entities/bike.entity";
import { EntityRepository, Repository } from "typeorm";
import { BikeStatus } from "./bikes.status.enum";
import { CreateBikeDto } from "./dto/create-bike.dto";

@EntityRepository(Bike)
export class BikeRepository extends Repository<Bike> {
	async createBike(createBikeDto: CreateBikeDto) :Promise<Bike>{
		const { name, price, maker } = createBikeDto;
		const bike = this.create({
			name,
			price,
			maker,
			status: BikeStatus.ON_SALE,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		});

		await this.save(bike);

		return bike;
	}
}
