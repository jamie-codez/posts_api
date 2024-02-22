import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user['dataValues'];
      return result;
    }
    return null;
  }

  public async create(user): Promise<any> {
    if (!user.email || !user.password) {
      throw new Error('Email and password are required');
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await this.usersService.create({
      ...user,
      password: hashedPassword,
    });
    const { password, ...result } = newUser['dataValues'];
    // Generate JWT
    const token = await this.jwtService.signAsync(result);
    return { ...result, token };
  }

  public async login(user): Promise<any> {
    const localUser = await this.usersService.findOneByEmail(user.email);
    if (!localUser) {
      throw new Error('User not found');
    }
    const { password, ...result } = localUser['dataValues'];
    // Generate JWT
    const token = await this.jwtService.signAsync(result);
    return { ...result, token };
  }
}
