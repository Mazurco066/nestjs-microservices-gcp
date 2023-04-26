// Dependencies
import { ConfigService } from '@nestjs/config'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from './users/users.module'

// Logger module
import { LoggerModule } from '@app/common'

// Setup module
@Module({
  imports: [
    UsersModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required()
      })
    }),
    JwtModule.registerAsync({
      useFactory: (cfgService: ConfigService) => ({
        secret: cfgService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${cfgService.get('JWT_EXPIRATION')}s`
        }
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})

// Exports auth module
export class AuthModule {}
