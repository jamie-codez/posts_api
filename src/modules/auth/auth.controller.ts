import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../users/dto/user.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { DoesUserExistGuard } from '../../core/doesUserExist.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() login: LoginDto) {
    return this.authService.login(login);
  }

  @UseGuards(DoesUserExistGuard)
  @Post('register')
  async register(@Body() user: UserDto) {
    return this.authService.create(user);
  }
}
