// Validation rules
import { IsNotEmpty, IsString } from 'class-validator'

// DTO
export class GetUserDto {
  @IsString({ message: '"_id" must be a valid String' })
  @IsNotEmpty({ message: '"_id" must not be empty' })
  _id: string
}