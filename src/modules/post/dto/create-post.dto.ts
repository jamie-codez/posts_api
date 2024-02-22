import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'The user id of a post',
    type: Number,
    example: 1,
  })
  @IsNotEmpty({
    message: 'User id is required',
  })
  readonly userId: number;
  @ApiProperty({
    description: 'The title of a post',
    type: String,
    example: 'Post Title',
  })
  @IsNotEmpty({
    message: 'Title is required',
  })
  @MinLength(3, {
    message: 'Title is too short',
  })
  readonly title: string;
  @ApiProperty({
    description: 'The body of a post',
    type: String,
    example: 'Post Body that is used for just testing purposes.',
  })
  @IsNotEmpty({
    message: 'Body is required',
  })
  readonly body: string;
}
