// Dependencies
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ClientsModule, Transport } from '@nestjs/microservices'
import * as Joi from 'joi'
import { ReservationsController } from './reservations.controller'
import { ReservationsService } from './reservations.service'

// Repositories and models
import { ReservationDocument, ReservationSchema } from './models'
import { ReservationsRepository } from './reservations.repository'

// Core modules
import { AUTH_SERVICE, DatabaseModule, LoggerModule, PAYMENTS_SERVICE } from '@app/common'

// Setting up dependency injection
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema }
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
        AUTH_HOST: Joi.string().required(),
        AUTH_PORT: Joi.number().required(),
        PAYMENTS_HOST: Joi.string().required(),
        PAYMENTS_PORT: Joi.number().required()
      })
    }),
    // Notes: As we are using docker the 'AUTH_HOST' will be the service name defined on docker-compose.yaml instead of 0.0.0.0
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get<string>('AUTH_HOST'),
            port: configService.get<number>('AUTH_PORT')
          }
        }),
        inject: [ConfigService]
      },
      {
        name: PAYMENTS_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get<string>('PAYMENTS_HOST'),
            port: configService.get<number>('PAYMENTS_PORT')
          }
        }),
        inject: [ConfigService]
      }
    ])
  ],
  controllers: [ReservationsController],
  providers: [
    ReservationsService,
    ReservationsRepository
  ]
})

// Exporting reservations module
export class ReservationsModule {}
