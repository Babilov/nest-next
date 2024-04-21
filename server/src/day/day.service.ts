import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import * as cron from "node-cron";
import { CreateDayDto } from "./dto/create-day.dto";
import { UpdateDayDto } from "./dto/update-day.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Day } from "./entities/day.entity";
import { User } from "../users/entities/users.entity";
import { UsersService } from "../users/users.service";

@Injectable()
export class DayService {
	constructor(
		@InjectRepository(Day)
		private readonly dayRepository: Repository<Day>,
		private readonly usersService: UsersService,
	) {
		cron.schedule("0 0 * * *", async (): Promise<void> => {
			await this.autoCreate();
		});
	}

	async create(user: User, createDayDto: CreateDayDto): Promise<Day> {
		try {
			const day: Day = this.dayRepository.create(createDayDto);
			day.user = user;
			return await this.dayRepository.save(day);
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
		}
	}

	async autoCreate(): Promise<void> {
		const users: User[] = await this.usersService.getAll();
		const date: Date = new Date();
		for (const user of users) {
			await this.create(user, { day: date });
		}
	}

	async findAllByUser(user: User): Promise<Day[]> {
		return await this.dayRepository.find({ where: { user } });
	}

	async findOne(id: number): Promise<Day | null> {
		return await this.dayRepository.findOne({ where: { id } });
	}

	async update(id: number, updateDayDto: UpdateDayDto): Promise<UpdateResult> {
		return await this.dayRepository.update(id, updateDayDto);
	}

	async remove(id: number): Promise<DeleteResult> {
		return await this.dayRepository.delete(id);
	}
}
