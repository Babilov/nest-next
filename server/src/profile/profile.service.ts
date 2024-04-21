import { Injectable, Request } from '@nestjs/common';
import {User} from "../users/entities/users.entity";

@Injectable()
export class ProfileService {
  getProfile(@Request() req) {
    return req.user
  }
}
