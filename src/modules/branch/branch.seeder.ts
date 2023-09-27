import { Inject, Injectable, OnModuleInit } from '@nestjs/common';

import { Branch } from './branch.entity';
import { Repository } from 'typeorm';
import { BranchService } from './branch.service';

@Injectable()
export class BranchSeeder implements OnModuleInit {
  constructor(
    private readonly _branchService: BranchService,
    @Inject('BRANCH_REPOSITORY')
    private branchRepository: Repository<Branch>,
  ) {}

  async onModuleInit() {
    //await this.branchRepository.query('TRUNCATE TABLE branch RESTART IDENTITY CASCADE');
    const exist = await this.branchRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Branch). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Branch). Cargando registros en la base de datos.',
    );
    const branchData = [
      {
        name: 'Sucursal 1',
        address: 'Dirección 1',
        phone: '123456789',
        //account: 1  /agregar esto en los dto por los cambios de david
      },
      {
        name: 'Sucursal 2',
        address: 'Dirección 2',
        phone: '987654321',
        //account: 2  /agregar esto en los dto por los cambios de david
      },
      // Agregar más objetos con datos de prueba
    ];

    for (const data of branchData) {
      const branch = new Branch();
      branch.name = data.name;
      branch.address = data.address;
      branch.phone = data.phone;

      await this._branchService.create(branch);
    }
  }
}
