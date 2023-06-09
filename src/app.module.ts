import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AccountModule } from './modules/account/account.module';
import { BranchModule } from './modules/branch/branch.module';
import { PersonModule } from './modules/person/person.module';
import { ResponseInterceptor } from './response.interceptor'

@Module({
  imports: [UserModule,AccountModule],
  controllers: [AppController],
  providers: [AppService,  ResponseInterceptor],
})
export class AppModule {}
