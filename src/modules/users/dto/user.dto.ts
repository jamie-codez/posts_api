import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: 'The name of a user',
    type: String,
    example: 'John Doe',
  })
  readonly name: string;
  @ApiProperty({
    description: 'The email of a user',
    type: String,
    example: 'johndoe@email.com',
  })
  readonly email: string;
  @ApiProperty({
    description: 'The password of a user',
    type: String,
    example: 'password',
  })
  readonly password: string;
  @ApiProperty({
    description: 'The gender of a user',
    type: String,
    example: 'male',
  })
  readonly gender: string;
}
