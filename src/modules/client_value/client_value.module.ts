import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { clientInputProviders } from '../client_input/client_input.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...clientInputProviders],
})
export class ClientValueModule {}
