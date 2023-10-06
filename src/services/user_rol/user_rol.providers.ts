import { DataSource } from "typeorm";
import { UserRol } from "src/modules/user_rol/user_rol.entity";

export const userRolProviders = [
    {
        provide: 'USER_ROL_REPOSITORY',
        useFactory: (dataSource: DataSource)=> dataSource.getRepository(UserRol),
        inject:['DATA_SOURCE']
    }
]