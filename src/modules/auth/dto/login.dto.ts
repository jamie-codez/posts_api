import { ApiProperty } from '@nestjs/swagger';
import { NotEmpty } from 'sequelize-typescript';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'The email of a user',
    type: String,
    example: 'janedoe@email.com',
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
  readonly password: string;
}
