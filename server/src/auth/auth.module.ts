import { Module } from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import { AuthService } from './auth.service';
import {LocalStrategy} from "./strategies/local.strategy";
import {jwtConstants} from "./constants";
import { AuthController } from './auth.controller';
import {UsersModule} from "../users/users.module";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '24h'}
      })
    ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
