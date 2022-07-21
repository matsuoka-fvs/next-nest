import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeRepository } from './bike.repository';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';

@Module({
  imports: [TypeOrmModule.forFeature([BikeRepository])],
  controllers: [BikesController],
  providers: [BikesService]
})
export class BikesModule {}
