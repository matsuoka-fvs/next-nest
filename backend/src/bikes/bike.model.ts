import { BikeStatus } from "./bikes.status.enum";

export interface Bike {
	id: string;
	name: string;
	price: number;
	maker: string;
	status: BikeStatus;
}