import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { POST_REPOSITORY } from '../../constants';
import { Post } from './entities/post.entity';
import { User } from '../users/user.entity';

@Injectable()
export class PostService {
  constructor(
    @Inject(POST_REPOSITORY) private readonly postRepository: typeof Post,
  ) {}
  async create(createPostDto: CreatePostDto): Promise<Post> {
    return await this.postRepository.create<Post>({ ...createPostDto });
  }

  async findAll(page: number, limit: number): Promise<Post[]> {
    return await this.postRepository.findAll<Post>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
      offset: (page - 1) * limit,
      limit: limit,
    });
  }

  async findOne(id: number): Promise<Post> {
    return await this.postRepository.findOne<Post>({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const [numberOfAffectedRows, [updatedPost]] =
      await this.postRepository.update<Post>(updatePostDto, {
        where: { id },
        returning: true,
      });
    return { numberOfAffectedRows, updatedPost };
  }

  async delete(id: number): Promise<number> {
    return await this.postRepository.destroy({
      where: { id },
    });
  }
}
