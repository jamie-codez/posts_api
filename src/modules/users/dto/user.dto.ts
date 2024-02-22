import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserDto {
  @ApiProperty({
    description: 'The name of a user',
    type: String,
    example: 'John Doe',
  })
  @IsNotEmpty()
  @MinLength(3)
  readonly name: string;
  @ApiProperty({
    description: 'The email of a user',
    type: String,
    example: 'johndoe@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @ApiProperty({
    description: 'The password of a user',
    type: String,
    example: 'password',
  })
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
  @ApiProperty({
    description: 'The gender of a user',
    type: String,
    example: 'male',
  })
  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'Gender must be either male or female',
  })
  readonly gender: Gender;
}
