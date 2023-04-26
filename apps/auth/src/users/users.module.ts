// Dependencies
import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { UsersRepository } from './users.repository'

// Database modules
import { DatabaseModule } from '@app/common'
import { UserDocument, UserSchema } from './models'

// Setup module
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema }
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository]
})

// Exports users module
export class UsersModule {}
