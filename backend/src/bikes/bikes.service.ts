import { Injectable, NotFoundException } from '@nestjs/common';
import { Bike } from '../entities/bike.entity'
import { BikeStatus } from './bikes.status.enum';
import { CreateBikeDto } from './dto/create-bike.dto';
import { BikeRepository } from './bike.repository';

@Injectable()
export class BikesService {
	constructor(private readonly bikeRepository: BikeRepository){}
	private bikes: Bike[] = [];

	async findAll(): Promise<Bike[]> {
		return await this.bikeRepository.find();
	}

	async create(createBikeDto: CreateBikeDto): Promise<Bike> {
		return await this.bikeRepository.createBike(createBikeDto);
	}

	async findById(id: string): Promise<Bike> {
		const found =  await this.bikeRepository.findOne(id);
		if (!found){
			throw new NotFoundException();
		}
		return found;
	}

	async updateStatus(id: string): Promise<Bike>{
		const bike = await this.findById(id);
		bike.status = BikeStatus.SOLD_OUT;
		bike.updatedAt = new Date().toISOString();
		await this.bikeRepository.save(bike);
		return bike;
	}

	async delete(id: string): Promise<void> {
		await this.bikeRepository.delete({ id });
	}
}
