import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'The email of a user',
    type: String,
    example: 'janedoe@email.com',
  })
  readonly email: string;
  @ApiProperty({
    description: 'The password of a user',
    type: String,
    example: 'password',
  })
  readonly password: string;
}
