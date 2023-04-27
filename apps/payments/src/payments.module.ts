// Dependencies
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ClientsModule, Transport } from '@nestjs/microservices'
import * as Joi from 'joi'
import { Module } from '@nestjs/common'
import { PaymentsController } from './payments.controller'
import { PaymentsService } from './payments.service'

// Common modules
import { LoggerModule, NOTIFICATIONS_SERVICE } from '@app/common'

// Module setup
@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        TCP_PORT: Joi.number().required(),
        STRIPE_SECRET_KEY: Joi.string().required(),
        NOTIFICATIONS_HOST: Joi.string().required(),
        NOTIFICATIONS_PORT: Joi.number().required()
      })
    }),
    ClientsModule.registerAsync([
      {
        name: NOTIFICATIONS_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get<string>('NOTIFICATIONS_HOST'),
            port: configService.get<number>('NOTIFICATIONS_PORT')
          }
        }),
        inject: [ConfigService]
      }
    ])
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})

// Exporting module
export class PaymentsModule {}
