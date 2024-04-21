import {
	HttpException,
	HttpStatus,
	Injectable,
	UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { UserDto } from "./dto/user.dto";
import { User } from "./entities/users.entity";
import { Role } from "../role/entities/role.entity";
import { validate } from "class-validator";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async create(userDto: UserDto): Promise<User> {
		try {
			const newUser: User = this.userRepository.create(userDto);
			const errors = await validate(userDto);
			newUser.password = await bcrypt.hash(userDto.password, 10);
			newUser.roles = [{ id: 2 } as Role];
			return await this.userRepository.save(newUser);
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
		}
	}

	async getAll(): Promise<User[]> {
		return await this.userRepository.find({
			relations: ["roles"],
		});
	}

	async findById(id: number): Promise<User> {
		return await this.userRepository.findOne({
			where: { id },
			relations: ["roles"],
		});
	}

	async findByUsername(username: string): Promise<User> {
		return await this.userRepository.findOne({ where: { username } });
	}

	async findByUsernameWihPassword(username: string): Promise<User> {
		return await this.userRepository
			.createQueryBuilder("user")
			.where("user.username = :username", { username })
			.addSelect("user.password")
			.getOne();
	}

	async addUserRole(userId: number, roleId: number): Promise<User> {
		const user: User = await this.findById(userId);
		if (!user) {
			throw new UnauthorizedException();
		}
		try {
			user.roles.push({ id: roleId } as Role);
			return await this.userRepository.save(user);
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
		}
	}
}
