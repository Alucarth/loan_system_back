import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './auth.constans';
import { UserService } from 'src/modules/user/user.service';
import { RequestUserDto } from 'src/modules/user/user.dto';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignreExpiration: false,
      secretOrKey: jwtConstants.secret,
    }); //configure password strategy
  }

  async validate(payload: any) {
    //add more information for database here
    const user = await this.userService.findOneById(payload.sub);
    const request_user = new RequestUserDto();
    request_user.account_id = user.account_id;
    request_user.user_id = user.id;

    return request_user;
  }
}
