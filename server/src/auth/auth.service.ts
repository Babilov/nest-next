import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { User } from "../users/entities/users.entity";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
	constructor(
		private userService: UsersService,
		private jwtService: JwtService,
	) {}

	async validateUser(username: string, password: string) {
		const user: User =
			await this.userService.findByUsernameWihPassword(username);
		if (user && (await bcrypt.compare(password, user.password))) {
			const { password, ...result } = user;
			return result;
		}
		throw new HttpException("Неверный логин/пароль", HttpStatus.BAD_REQUEST);
	}

	async login(user: any) {
		const payload = { username: user.username, sub: user.id };
		return { access_token: this.jwtService.sign(payload) };
	}
}
