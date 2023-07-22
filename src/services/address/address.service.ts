import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Address } from 'src/modules/address/address.entity';
import { CreateAddressDTO } from 'src/controllers/address/create-address.dto';
@Injectable()
export class AddressService {
    constructor(
        @Inject('ADDRESS_REPOSITORY')
        private addressRepository: Repository<Address>
    ){}

    async findAllByPersonId(person_id: any): Promise<Address[]>
    {
        return this.addressRepository.find({
            relations:{
                ocupations: true
            },
            where:{
                person: {
                    id: person_id
                }
            }
        })
    }

    async create(address: CreateAddressDTO): Promise<Address>
    {
        console.log('address XD',address)
        return await this.addressRepository.save(address)
    }
    
}
