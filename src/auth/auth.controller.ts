import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Request,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from 'src/modules/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  loggin(@Request() req): any {
    return this.authService.login(req.user);
  }
  //   sigIn(@Body() signInDto: Record<string, any>) {
  //     return this.authService.signIn(signInDto.username, signInDto.password);
  //   }
}
