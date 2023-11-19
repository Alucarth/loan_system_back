import { Module } from '@nestjs/common';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';
import { RolSeeder } from './rol.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  controllers: [RolController],
  providers: [RolService, RolSeeder],
})
export class RolModule {}
