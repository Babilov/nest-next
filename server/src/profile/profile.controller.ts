import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import { ProfileService } from './profile.service';
import {JwtAuthGuard} from "../auth/auth-guards/JwtAuthGuard";

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getProfile(@Request() req){
    return this.profileService.getProfile(req)
  }
}
