import {Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, Unique} from "typeorm";
import {User} from "../../users/entities/users.entity";

@Unique(['name'])
@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, user => user.roles)
  @JoinTable()
  users: User[];
}