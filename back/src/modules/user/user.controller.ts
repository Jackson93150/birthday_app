import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(): Promise<void> {
    return this.userService.createUser();
  }

  @Get('/birthday')
  async getBirthday(): Promise<User[]> {
    return this.userService.getBirthday();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User | undefined> {
    return this.userService.getUserById(id);
  }
}
