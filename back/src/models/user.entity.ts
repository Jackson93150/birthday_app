import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_birthday: number;

  @Column()
  first_name: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthday: Date;
}
