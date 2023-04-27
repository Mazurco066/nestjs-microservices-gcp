// Dependencies
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'

// DTO's
import { CreateUserDto } from './dto'
import { CurrentUser } from '@app/common'
import { UserDocument } from '@app/common'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'

@Controller('users')
export class UsersController {
  constructor(protected readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UserDocument) {
    return user
  }
}
