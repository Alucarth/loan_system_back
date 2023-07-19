import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { BranchService } from "src/services/branch/branch.service";
import { Branch } from "./branch.entity";
import { Repository } from "typeorm";

@Injectable()
export class BranchSeeder implements OnModuleInit {
    constructor(
        private readonly _branchService: BranchService,
        @Inject('BRANCH_REPOSITORY')
        private branchRepository: Repository<Branch>,
        ) {}

    async onModuleInit() {

        //await this.branchRepository.query('TRUNCATE TABLE branch RESTART IDENTITY CASCADE');
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
  