// Validation rules
import { IsDateString, IsString, IsNotEmpty } from 'class-validator'
import { Type } from 'class-transformer'

// Requested fields for reservation operations
export class CreateReservationDto {
  @IsDateString({}, { message: '"startDate" mest be on "YYYY-MM-DD" format' })
  @Type(() => Date)
  startDate: Date

  @IsDateString({}, { message: '"endDate" mest be on "YYYY-MM-DD" format' })
  @Type(() => Date)
  endDate: Date

  @IsString({ message: '"placeId" must be a valid String' })
  @IsNotEmpty({ message: '"placeId" must not be empty' })
  placeId: string

  @IsString({ message: '"invoiceId" must be a valid String' })
  @IsNotEmpty({ message: '"invoiceId" must not be empty' })
  invoiceId: string
}
