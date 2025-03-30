import { Controller, Get, Post, Inject, Body } from '@nestjs/common';
import { FirebaseAuthService } from '../services/firebase.service';
import { log } from 'console';
import { LoginDto } from 'src/models/login-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

  @Get('test')
  testAuth() {
    const auth = this.firebaseAuthService.getAuthInstance();
    return { message: 'Firebase Auth is initialized', authInstance: !!auth };
  }

  @Post('login')
  login(@Body() request: LoginDto){
    return { message: 'Login endpoint hit'};
  }

  @Post('register')
  async register(@Body() request: LoginDto){
    return await this.firebaseAuthService.createUser(request.email, request.password);
  }
}