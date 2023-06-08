import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity';
import * as fs from 'fs';

@Injectable()
export class UserService {
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
}
