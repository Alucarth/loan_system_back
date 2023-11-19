import { Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Address } from '../address/address.entity';
import { Ocupation } from './ocupation.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OcupationSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Ocupation)
    private ocupationRepository: Repository<Ocupation>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async onModuleInit() {
    const exist = await this.ocupationRepository.find();
    if (exist.length > 0) {
      console.log(
        'Saltando proceso del seeder -> (Ocupation). Ya existen registros en la base de datos.',
      );
      return;
    }
    console.log(
      'Iniciando el seeder -> (Ocupation). Cargando registros en la base de datos.',
    );

    const address = await this.addressRepository.find();

    const ocupationData = [
      {
        address_id: address[0],
        company_name: 'TechSolutions',
        description: 'Desarrollo y mantenimiento de aplicaciones web',
        main_ocupation: 'Sí',
        net_income: '12000',
        ocupation: 'Ingeniero de Software',
        ocupation_type: 'Tiempo completo',
        periodicity_income: 'Mensual',
        working_hours: 40,
        status: 'Activo',
        work_them: 'Remoto',
        workdays: 5,
      },
      {
        address_id: address[1],
        company_name: 'TechSolutions',
        description: 'Creación de diseños gráficos para clientes diversos',
        main_ocupation: 'Sí',
        net_income: '12000',
        ocupation: 'Freelancer Diseñador Gráfico',
        ocupation_type: 'Independiente',
        periodicity_income: 'Proyecto',
        working_hours: 40,
        status: 'Activo',
        work_them: 'Remoto',
        workdays: 5,
      },

      // Agregar más objetos con datos de prueba
    ];

    // for (const data of ocupationData) {
    //   const ocupation = new CreateOcupationDto();

    //   ocupation.address_id = data.address_id.id;
    //   ocupation.company_name = data.company_name;
    //   ocupation.description = data.description;
    //   ocupation.main_ocupation = data.main_ocupation;
    //   ocupation.net_income = data.net_income;
    //   ocupation.ocupation = data.ocupation;
    //   ocupation.ocupation_type = data.ocupation_type;
    //   ocupation.periodicity_income = data.periodicity_income;
    //   ocupation.working_hours = data.working_hours;
    //   ocupation.status = data.status;
    //   ocupation.work_them = data.work_them;
    //   ocupation.workdays = data.workdays;

    //   await this._ocupationService.create(ocupation);
    // }
  }
}
