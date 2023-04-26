// Dependencies
import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common'
import { compare, hash } from 'bcryptjs'
import { CreateUserDto, GetUserDto } from './dto'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(protected readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    await this.validateEmail(createUserDto)
    return this.usersRepository.create({
      ...createUserDto,
      password: await hash(createUserDto.password, 10)
    })
  }

  async validateEmail(createUserDto: CreateUserDto) {
    try {
      await this.usersRepository.findOne({ email: createUserDto.email })
    } catch (err) {
      return
    }
    throw new UnprocessableEntityException('E-mail already exists')
  }

  async getUser(getUserDto: GetUserDto) {
    return this.usersRepository.findOne(getUserDto)
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email })
    const isPasswordValid = await compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credentials are not valid')
    }
    return user
  }
}
