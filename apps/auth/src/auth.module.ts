// Dependencies
import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from './users/users.module'

// Logger module
import { LoggerModule } from '@app/common'

// Setup module
@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [AuthController],
  providers: [AuthService],
})

// Exports auth module
export class AuthModule {}
