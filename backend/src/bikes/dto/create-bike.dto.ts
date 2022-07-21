import { IsNotEmpty,IsString,MaxLength,IsInt,Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBikeDto {
	
	@IsNotEmpty()
	@IsString()
	@MaxLength(40)
	name: string;
	
	@IsInt()
	@Min(1)
	@Type(() => Number)
	price: number;

	@IsNotEmpty()
	@IsString()
	@MaxLength(40)
	maker: string;
}