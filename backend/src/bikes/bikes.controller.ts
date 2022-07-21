import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { Bike } from '../entities/bike.entity'
import { CreateBikeDto } from './dto/create-bike.dto';

@Controller('bikes')
export class BikesController {
	constructor(private readonly bikeService: BikesService){}

	@Get()
	async findAll(): Promise<Bike[]> {
		return  await this.bikeService.findAll();
	}

	@Get(':id')
	async findById(@Param('id',ParseUUIDPipe) id: string): Promise<Bike>{
		return  await this.bikeService.findById(id);
	}

	@Post()
	async create(@Body() createBikeDto: CreateBikeDto): Promise<Bike> {
		return await this.bikeService.create(createBikeDto);
	}

	@Patch(':id')
	async updateStatus(@Param('id',ParseUUIDPipe) id:string): Promise<Bike>{
		return await this.bikeService.updateStatus(id);
	}

	@Delete(':id')
	async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void>{
		await this.bikeService.delete(id);
	}
}
