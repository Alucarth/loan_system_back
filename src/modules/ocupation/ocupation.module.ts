import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OcupationSeeder } from './ocupation.seeder';
import { OcupationController } from './ocupation.controller';
import { ocupationProviders } from './ocupation.providers';
import { addressProviders } from '../address/address.providers';
import { OcupationService } from './ocupation.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OcupationController],
  providers: [
    ...ocupationProviders,
    ...addressProviders,
    OcupationService,
    
  ],
})
export class OcupationModule {}
