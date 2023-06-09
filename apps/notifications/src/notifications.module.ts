// Dependencies
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import * as Joi from 'joi'
import { NotificationsController } from './notifications.controller'
import { NotificationsService } from './notifications.service'

// Common modules
import { LoggerModule } from '@app/common'

// Module setup
@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        TCP_PORT: Joi.number().required(),
        SMTP_USER: Joi.string().required(),
        GOOGLE_OAUTH_CLIENT_ID: Joi.string().required(),
        GOOGLE_OAUTH_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_OAUTH_REFRESH_TOKEN: Joi.string().required()
      })
    })
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})

// Notifications module exports
export class NotificationsModule {}