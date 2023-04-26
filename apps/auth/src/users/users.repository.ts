// Dependencies
import { Logger, Injectable } from '@nestjs/common'
import { AbstractRepository } from '@app/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Models
import { UserDocument } from './models'

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument> {
  protected readonly logger: Logger = new Logger(UsersRepository.name)

  constructor(@InjectModel(UserDocument.name) userModel: Model<UserDocument>) {
    super(userModel)
  }
}
