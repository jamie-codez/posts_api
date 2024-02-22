import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { postsProviders } from './posts.providers';

@Module({
  controllers: [PostController],
  providers: [PostService, ...postsProviders],
})
export class PostModule {}
