import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './auth.constans';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignreExpiration: false,
      secretOrKey: jwtConstants.secret,
    }); //configure password strategy
  }

  async validate(payload: any) {
    //add more information for database here
    //const user = await ...
    return {
      id: payload.sub,
      name: payload.name,
      account_id: payload.account_id,
    };
  }
}
