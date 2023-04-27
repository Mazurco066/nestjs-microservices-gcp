// Validation rules
import { IsDate, IsDefined, IsNotEmptyObject, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateChargeDto } from '@app/common'

// Requested fields for reservation operations
export class CreateReservationDto {
  @IsDate({ message: '"startDate" must be on "YYYY-MM-DD" format' })
  @Type(() => Date)
  startDate: Date

  @IsDate({ message: '"endDate" must be on "YYYY-MM-DD" format' })
  @Type(() => Date)
  endDate: Date

  @IsDefined({ message: '"charge" must be defined' })
  @IsNotEmptyObject({}, { message: '"charge" must not be empty' })
  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge: CreateChargeDto
}
