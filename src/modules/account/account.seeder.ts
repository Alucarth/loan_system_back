import { Injectable, OnModuleInit } from "@nestjs/common";
import { Account } from "./account.entity";
import { AccountService } from "src/services/account/account.service";

@Injectable()
export class AccountSeeder implements OnModuleInit {
    constructor(private readonly _accountService: AccountService) {}

    async onModuleInit() {
        const accountData = [
            {
              account_name: 'Cuenta 1',
              company_name: 'Empresa 1',
              logo_url: 'https://ejemplo.com/logo1.png',
              interval: 30,
              label_1: 'Etiqueta 1',
              label_2: 'Etiqueta 2',
              // Agregar más datos de prueba si es necesario
            },
            {
              account_name: 'Cuenta 2',
              company_name: 'Empresa 2',
              logo_url: 'https://ejemplo.com/logo2.png',
              interval: 60,
              label_1: 'Etiqueta 3',
              label_2: 'Etiqueta 4',
              // Agregar más datos de prueba si es necesario
            },
            // Agregar más objetos con datos de prueba
          ];
    
        for (const data of accountData) {
            const account = new Account();
            account.account_name = data.account_name;
            account.company_name = data.company_name;
            account.logo_url = data.logo_url;
            account.interval = data.interval;
            account.label_1 = data.label_1;
            account.label_2 = data.label_2;
    
            await this._accountService.create(account);
        }
    }
}
  