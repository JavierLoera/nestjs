import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { jwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    // JwtModule.register({
    //   secret: process.env.JWTKEY,
    //   signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    // }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, jwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
