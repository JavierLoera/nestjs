import { Controller, Body, Post, UseGuards, Param, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create.user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() user: CreateUserDto) {
    return await this.authService.validateUser(user.email, user.password);
  }

  @Post('/signup')
  async signUp(@Body() user: CreateUserDto) {
    return await this.authService.create(user);
  }

  @Get('token/:token')
  async getDataUser(@Param('token') token: string) {
    return await this.authService.getDataUser(token);
  }
}
