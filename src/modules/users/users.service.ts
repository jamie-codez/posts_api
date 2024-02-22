import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    try {
      return await this.userRepository.create<User>({ ...user });
    } catch (e) {
      console.log(e);
    }
  }

  async findAll(page: number, limit: number): Promise<User[]> {
    return await this.userRepository.findAll<User>({
      offset: (page - 1) * limit,
      limit: limit,
    });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: { id },
    });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: { email },
    });
  }

  async update(id: number, newValue: UserDto): Promise<User | null> {
    const user = await this.userRepository.findByPk<User>(id);
    if (!user.id) {
      console.log('user not found');
    }
    await this.userRepository.update<User>(newValue, { where: { id } });
    return await this.userRepository.findByPk<User>(id);
  }

  async delete(id: number): Promise<number> {
    return await this.userRepository.destroy({
      where: { id },
    });
  }
}
