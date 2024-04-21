import { Module } from "@nestjs/common";
import { DayService } from "./day.service";
import { DayController } from "./day.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Day } from "./entities/day.entity";
import { UsersModule } from "../users/users.module";

@Module({
	imports: [TypeOrmModule.forFeature([Day]), UsersModule],
	controllers: [DayController],
	providers: [DayService],
})
export class DayModule {}
