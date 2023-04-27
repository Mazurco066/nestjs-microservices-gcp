// Validation rules
import { IsCreditCard, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CardDto {
  @IsString({ message: '"cvc" must be a valid String' })
  @IsNotEmpty({ message: '"cvc" must not be empty' })
  cvc: string

  @IsNumber({}, { message: '"exp_month" must be a valid Number' })
  exp_month: number

  @IsNumber({}, { message: '"exp_year" must be a valid Number' })
  exp_year: number

  @IsCreditCard({ message: '"number" must be a valid Credit card number' })
  number: string
}