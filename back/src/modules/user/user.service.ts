import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity';
import * as fs from 'fs';
import { Cron } from '@nestjs/schedule';
import * as sendgridMail from '@sendgrid/mail';
import { SUBJECT, BODY } from 'src/constant/sendgrid';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(): Promise<void> {
    const csvData = fs.readFileSync('src/data/student.csv', 'utf-8');

    const lines = csvData.split('\n');
    await this.userRepository.clear();

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line === '') {
        continue;
      }

      const values = line.split(',');

      const first_name = values[0];
      const name = values[1];
      const birthday = values[2];
      const email = values[3];

      const user = {
        first_name: first_name,
        name: name,
        birthday: birthday,
        email: email,
      };

      this.userRepository.save(user);
    }
  }

  async getUserById(id_birthday: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id_birthday } });
  }

  async getBirthday(): Promise<User[]> {
    try {
      const today = new Date();
      const month = today.getMonth() + 1;
      const day = today.getDate();

      const users = await this.userRepository
        .createQueryBuilder('user')
        .where(`MONTH(user.birthday) = :month`, { month })
        .andWhere(`DAY(user.birthday) = :day`, { day })
        .getMany();

      if (users.length > 0) {
        return users;
      } else {
        return [];
      }
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des utilisateurs : ${error.message}`,
      );
    }
  }

  @Cron('0 0 * * *')
  async sendMail(): Promise<void> {
    try {
      sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);
      const users = await this.getBirthday();
      if (users.length > 0) {
        users.forEach(async (user) => {
          await sendgridMail.send({
            from: process.env.SENDGRID_SENDER,
            to: user.email,
            subject: SUBJECT,
            html: BODY(user),
          });
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
}
