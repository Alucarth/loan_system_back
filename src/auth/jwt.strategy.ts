import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './auth.constans';
import { UserService } from 'src/modules/user/user.service';
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
    return {
      // id: payload.sub,
      // name: payload.name,
      user_id: user.id,
      account_id: user.account_id,
    };
  }
}
