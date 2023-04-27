// Dependencies
import { IsDefined, IsNotEmptyObject, IsNumber, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CardDto } from './card.dto'

export class CreateChargeDto {
  @IsDefined({ message: '"card" must be defined' })
  @IsNotEmptyObject({}, { message: '"card" must not be empty' })
  @ValidateNested()
  @Type(() => CardDto)
  card: CardDto

  @IsNumber({}, { message: '"amount" must be a valid number' })
  amount: number
}