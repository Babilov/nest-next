import {
	Column,
	Entity,
	ManyToMany,
	PrimaryGeneratedColumn,
	JoinTable,
	Unique,
	OneToMany,
	BeforeInsert,
} from "typeorm";
import { Role } from "../../role/entities/role.entity";
import { Day } from "../../day/entities/day.entity";

@Unique(["username", "email"])
@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	username: string;

	@Column({ unique: true })
	email: string;

	@Column({ select: false })
	password: string;

	@ManyToMany(() => Role, role => role.users)
	@JoinTable()
	roles: Role[];

	@OneToMany(() => Day, day => day.user)
	days: Day[];
}
