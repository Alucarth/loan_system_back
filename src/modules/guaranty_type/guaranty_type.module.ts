import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { guarantyTypeProviders } from './guaranty_type.providers';
import { userProviders } from '../user/user.providers';
import { GuarantyTypeService } from './guaranty_type.service';
import { GuarantyTypeController } from './guaranty_type.controller';
import { GuarantyTypeSeeder } from './guaranty_type.seeder';

@Module({
    imports: [DatabaseModule],
    controllers: [GuarantyTypeController],
    providers: [
      ...guarantyTypeProviders,
      ...userProviders,
      GuarantyTypeService,
      GuarantyTypeSeeder
    ],
  })
export class GuarantyTypeModule {}
