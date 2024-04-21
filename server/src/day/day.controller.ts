import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
	Request,
} from "@nestjs/common";
import { DayService } from "./day.service";
import { CreateDayDto } from "./dto/create-day.dto";
import { UpdateDayDto } from "./dto/update-day.dto";
import { Day } from "./entities/day.entity";
import { JwtAuthGuard } from "../auth/auth-guards/JwtAuthGuard";

@Controller("days")
export class DayController {
	constructor(private readonly dayService: DayService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Request() req, @Body() createDayDto: CreateDayDto) {
		return this.dayService.create(req.user, createDayDto);
	}

	@UseGuards(JwtAuthGuard)
	@Get()
	findAll(@Request() req): Promise<Day[]> {
		return this.dayService.findAllByUser(req.user);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.dayService.findOne(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateDayDto: UpdateDayDto) {
		return this.dayService.update(+id, updateDayDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.dayService.remove(+id);
	}
}
