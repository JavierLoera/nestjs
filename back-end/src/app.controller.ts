import { Controller, Request, UseGuards, Post } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local.auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.body);
  }
}
