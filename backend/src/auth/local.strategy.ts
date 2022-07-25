// import { Injectable } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { Strategy as BaseLocalStrategy } from "passport-local";
// import { User } from "src/entities/user.entity";
// import { AuthService } from "./auth.service";

// @Injectable()
// export class LocalStrategy extends PassportStrategy(BaseLocalStrategy){
// 	constructor(private authService: AuthService){
// 		super();
// 	}

// 	async validate(username: User['username'], pass: User['password']): Promise<PasswordOmitUser> {
// 		const user = await this.authService.validateUser(username, pass);
// 	}
// }