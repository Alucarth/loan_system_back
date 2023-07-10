import { Module } from '@nestjs/common';
import { OcupationController } from 'src/controllers/ocupation/ocupation.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ocupationProviders } from 'src/services/ocupation/ocupation.providers';
import { OcupationService } from 'src/services/ocupation/ocupation.service';

@Module({
    imports: [DatabaseModule],
    controllers: [OcupationController],
    providers: [
        ...ocupationProviders,
        OcupationService
    ]
})
export class OcupationModule {}
