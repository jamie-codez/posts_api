import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DoesUserExistGuard } from '../../core/doesUserExist.guard';
import { JwtGuard } from '../../core/jwt.guard';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtGuard)
  @UseGuards(DoesUserExistGuard)
  @Post()
  async create(@Body() user: UserDto) {
    return await this.usersService.create(user);
  }

  @UseGuards(JwtGuard)
  @Get('all')
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.usersService.findAll(page, limit);
  }

  @UseGuards(JwtGuard)
  @Get('id')
  async findOneById(@Query('id') id: number) {
    return await this.usersService.findOneById(id);
  }

  @UseGuards(JwtGuard)
  @Get('email')
  async findOneByEmail(@Query('email') email: string) {
    return await this.usersService.findOneByEmail(email);
  }

  @Put()
  async update(@Query('id') id: number, @Body() user: UserDto) {
    return await this.usersService.update(id, user);
  }

  @Delete()
  async delete(@Query('id') id: number) {
    return await this.usersService.delete(id);
  }
}
