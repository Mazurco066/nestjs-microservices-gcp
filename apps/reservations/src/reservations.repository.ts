// Dependencies
import { Injectable, Logger } from '@nestjs/common'
import { AbstractRepository } from '@app/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ReservationDocument } from './models'

@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name)

  constructor(
    @InjectModel(ReservationDocument.name) reservationModel: Model<ReservationDocument>
  ) {
    super(reservationModel)
  }
}
