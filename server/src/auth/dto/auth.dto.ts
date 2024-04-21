import { IsNotEmpty } from "class-validator";

export class AuthDto {
	@IsNotEmpty({ message: "Обязательное поле" })
	username: string;
	@IsNotEmpty({ message: "Обязательное поле" })
	password: string;
}
