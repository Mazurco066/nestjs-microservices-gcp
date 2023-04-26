// Dependencies
import { Body, Controller, Post } from '@nestjs/common'
import { UsersService } from './users.service'

// DTO's
import { CreateUserDto } from './dto'

@Controller('users')
export class UsersController {
  constructor(protected readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }
}