import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class UserDto {
	@MinLength(5, { message: "Логин должен содержать минимум 5 символов" })
	@IsString()
	username: string;

	@IsEmail({}, { message: "Почта должна быть действительной" })
	email: string;

	@MinLength(8, {
		message: "Пароль должен содержать минимум 8 символов",
	})
	@IsString()
	@Matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
		{
			message:
				"Пароль должен содержать минимум одну букву верхнего и нижнего регистра, цифру и специальный символ",
		},
	)
	password: string;
}
