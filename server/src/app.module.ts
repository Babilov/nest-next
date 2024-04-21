const settings = require("../ormconfig.json");
import { Module } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ProfileModule } from "./profile/profile.module";
import { RoleModule } from "./role/role.module";
import { DayModule } from "./day/day.module";

@Module({
	imports: [
		TypeOrmModule.forRoot(settings),
		AuthModule,
		UsersModule,
		ProfileModule,
		RoleModule,
		DayModule,
	],
	providers: [
		{
			provide: APP_PIPE,
			useClass: ValidationPipe,
		},
	],
})
export class AppModule {}
