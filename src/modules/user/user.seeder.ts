import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { Person } from "src/modules/person/person.entity";

@Injectable()
export class UserSeeder implements OnModuleInit {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private readonly _userService: UserService,
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
        ) {}

    async onModuleInit() {

        const exist = await this.userRepository.find();
        if (exist.length > 0) {
            console.log('Saltando proceso del seeder -> (User). Ya existen registros en la base de datos.');
            return;
        }
        console.log('Iniciando el seeder -> (User). Cargando registros en la base de datos.');

        const persons = await this.personRepository.find();

        const userData = [
            {
                username: "dilan",
                password: "123456",
                person: persons[0],
            },
            {
                username: "david",
                password: "123456",
                person: persons[1],
            },
            {
                username: "keyrus",
                password: "123456",
                person: persons[2],
            },            
            // Agregar más objetos con datos de prueba
          ];
    
          for (const data of userData) {
            const user = new User();
            
            user.username = data.username;
            user.password = data.password;
            user.person = data.person;

            await this._userService.create(user);
        }
    
    }
}
  