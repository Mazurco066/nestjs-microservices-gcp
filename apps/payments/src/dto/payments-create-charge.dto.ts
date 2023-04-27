// Validation rules
import { IsEmail } from 'class-validator'
import { CreateChargeDto } from '@app/common'

export class PaymentsCreateChargeDto extends CreateChargeDto {
  @IsEmail({}, { message: '"email" must be a valid E-mail address' })
  email: string
}