import { Post } from './entities/post.entity';
import { POST_REPOSITORY } from '../../constants';

export const postsProviders = [
  {
    provide: POST_REPOSITORY,
    useValue: Post,
  },
];
