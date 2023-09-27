import { Module } from '@nestjs/common';
import { RolController } from './rol.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RolService } from './rol.service';
import { rolProviders } from './rol.providers';
import { RolSeeder } from './rol.seeder';

@Module({
  imports: [DatabaseModule],
  controllers: [RolController],
  providers: [...rolProviders, RolService, RolSeeder],
})
export class RolModule {}
