import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { zoneProviders } from './zone.providers';
import { ZoneSeeder } from './zone.seeder';
import { accountProviders } from '../account/account.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...zoneProviders, ZoneSeeder, ...accountProviders],
})
export class ZoneModule {}
