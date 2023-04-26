// Dependencies
import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(protected readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto)
  }
}
