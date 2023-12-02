import { Module } from '@nestjs/common';
import { ZoneSeeder } from './zone.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './zone.entity';
import { Account } from '../account/account.entity';
import { ZoneController } from './zone.controller';
import { ZoneService } from './zone.service';

@Module({
  imports: [TypeOrmModule.forFeature([Zone, Account])],
  controllers: [ZoneController],
  providers: [ZoneSeeder, ZoneService],
})
export class ZoneModule {}
