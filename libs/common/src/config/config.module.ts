// Module dependencies
import * as Joi from 'joi'
import { Module } from '@nestjs/common'
import {
  ConfigModule as NestConfigModule,
  ConfigService
} from '@nestjs/config'

// Module setup
@Module({
  imports: [NestConfigModule.forRoot({
    validationSchema: Joi.object({
      MONGODB_URI: Joi.string().required()
    })
  })],
  providers: [ConfigService],
  exports: [ConfigService]
})

// Module exports
export class ConfigModule {}
