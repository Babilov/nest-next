import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { User } from "../../users/entities/users.entity";

@Unique(['day', 'user'])
@Entity('day')
export class Day {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'date'})
  day: Date;

  @Column({default: false})
  smoked: boolean;

  @ManyToOne(() => User, user => user.days)
  user: User;
}
