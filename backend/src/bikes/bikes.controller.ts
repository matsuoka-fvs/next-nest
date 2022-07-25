import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { Bike } from '../entities/bike.entity'
import { CreateBikeDto } from './dto/create-bike.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

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
	@UseGuards(JwtAuthGuard)
	async create(@Body() createBikeDto: CreateBikeDto): Promise<Bike> {
		return await this.bikeService.create(createBikeDto);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	async updateStatus(@Param('id',ParseUUIDPipe) id:string): Promise<Bike>{
		return await this.bikeService.updateStatus(id);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void>{
		await this.bikeService.delete(id);
	}
}
