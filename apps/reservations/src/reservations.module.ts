// Dependencies
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import { ReservationsController } from './reservations.controller'
import { ReservationsService } from './reservations.service'

// Repositories and models
import { ReservationDocument, ReservationSchema } from './models'
import { ReservationsRepository } from './reservations.repository'

// Core modules
import { DatabaseModule, LoggerModule } from '@app/common'

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
        MONGODB_URI: Joi.string().required()
      })
    })
  ],
  controllers: [ReservationsController],
  providers: [
    ReservationsService,
    ReservationsRepository
  ]
})

// Exporting reservations module
export class ReservationsModule {}
