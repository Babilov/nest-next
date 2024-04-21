import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Request,
	UseGuards,
} from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { UsersService } from "./users.service";
import { User } from "./entities/users.entity";

@Controller("users")
export class UsersController {
	constructor(private usersService: UsersService) {}
	@Post("register")
	create(@Body() userDto: UserDto): Promise<UserDto> {
		return this.usersService.create(userDto);
	}
	@Get()
	allUsers(): Promise<User[]> {
		return this.usersService.getAll();
	}
	@Get(":id")
	findById(@Param("id") id: number): Promise<User> {
		return this.usersService.findById(id);
	}

	@Get("username/:username")
	findByUsername(@Param("username") username: string): Promise<User> {
		return this.usersService.findByUsername(username);
	}

	@Post(":userId/role/:roleId")
	addUserRole(
		@Param("userId") userId: number,
		@Param("roleId") roleId: number,
	): Promise<User> {
		return this.usersService.addUserRole(userId, roleId);
	}
}
