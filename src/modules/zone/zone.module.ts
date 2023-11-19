import { Module } from '@nestjs/common';
import { ZoneSeeder } from './zone.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './zone.entity';
import { Account } from '../account/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Zone, Account])],
  providers: [ZoneSeeder],
})
export class ZoneModule {}
