import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/user/user.entity';
import { UserService } from 'src/modules/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // async signIn(username: string, pass: string): Promise<any> {
  //   const user = await this.userService.findOne(username);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }

  //   const payload = { sub: user.id, username: user.username };

  //   //const { password, ...result} = user

  //   //jwt logic here
  //   // add rol
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //     user: payload,
  //     person: user.person,
  //     account: user.person.account,
  //   };
  // }
  // passport local strategy
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    // if (user && user.password === password) {
    if (user) {
      const passwordValid = await bcrypt.compare(password, user.password);
      if (passwordValid) {
        const { password, ...rest } = user; //envia todo en la variable rest menos password
        return rest;
      }
      return null;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.username, sub: user.id };
    console.log(user);
    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
      person: user.person,
      account: user.person.account,
    };
  }
}
