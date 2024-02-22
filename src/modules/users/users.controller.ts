import { Body, Controller, Delete, Get, Inject, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() user: UserDto) {
    return await this.usersService.create(user);
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.usersService.findAll(page, limit);
  }

  @Get()
  async findOneById(@Query('id') id: number) {
    return await this.usersService.findOneById(id);
  }

  @Get()
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
