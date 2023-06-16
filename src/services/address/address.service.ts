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
            where:{
                person: person_id
            }
        })
    }

    async create(address: CreateAddressDTO): Promise<Address>
    {
        return this.addressRepository.save(address)
    }
    
}
