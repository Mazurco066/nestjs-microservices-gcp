// Validation rules
import { IsEmail, IsString } from 'class-validator'

export class NotifyEmailDto {
  @IsString({ message: '"email" must be a valid string' })
  @IsEmail({}, { message: '"email" must be a valid E-mail address' })
  email: string
}