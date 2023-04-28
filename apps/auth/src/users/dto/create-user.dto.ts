// Validation rules
import { IsOptional, IsString, IsEmail, IsNotEmpty, IsStrongPassword, IsArray } from 'class-validator'
 
export class CreateUserDto {
  @IsString({ message: '"email" must be a String' })
  @IsEmail({}, { message: '"email" must be a valid E-mail address' })
  email: string
  
  @IsString({ message: '"password" must be a String' })
  @IsNotEmpty({ message: '"password" must not be empty' })
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minUppercase: 1,
    minSymbols: 1,
    minLowercase: 1
  }, { message: '"password" must contains at least 8 characters (including 1 Uppercase, 1 Sumbol, and 1 Number)' })
  password: string

  @IsOptional()
  @IsArray({ message: '"roles" must be an Array' })
  @IsString({ each: true, message: '"roles" value must be a String' })
  @IsNotEmpty({ each: true, message: '"roles" value must not be empty' })
  roles?: string[]
}
