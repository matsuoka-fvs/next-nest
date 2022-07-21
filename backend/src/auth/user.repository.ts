import { User } from "src/entities/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
	async createUser(createUserDto: CreateUserDto){
		const { username, password } = createUserDto;
		const user = this.create({ username, password });

		await this.save(user);
		return user;
	}
}