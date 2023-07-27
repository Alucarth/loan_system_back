import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Address } from 'src/modules/address/address.entity';
import { CreateAddressDTO, UpdateAddressDTO } from 'src/controllers/address/create-address.dto';
import { Person } from 'src/modules/person/person.entity';
import { City } from 'src/modules/city/city.entity';
@Injectable()
export class AddressService {
    constructor(
        @Inject('ADDRESS_REPOSITORY')
        private addressRepository: Repository<Address>,
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
        @Inject('CITY_REPOSITORY')
        private cityRepository: Repository<City>,
    ){}

    async findAllByPersonId(person_id: any): Promise<Address[]>
    {
        return this.addressRepository.find({
            where:{
                person: person_id
            },
            relations: ['city','person']
        })
    }
    
    async findAll(): Promise<Address[]> {
        return this.addressRepository.find({ relations: ['city', 'person'] });
    }

    async create(address_dto: CreateAddressDTO): Promise<Address>{
        
        // Buscar entidades relacionadas
        const city: City = await this.cityRepository.findOneBy({id: address_dto.city_id})
        const person: Person = await this.personRepository.findOneBy({id: address_dto.person_id})

        // Crear una nueva entidad Address y rellenar sus propiedades
        const address = new Address();

        address.address = address_dto.address;
        address.address_type = address_dto.address_type;
        address.comments = address_dto.comments;
        address.phone_number = address_dto.phone_number;
        address.zone = address_dto.zone;
        address.status = address_dto.status;
        address.property = address_dto.property;
        address.city = city;
        address.person = person;
            
        // Save the new Address entity to the database
        return await this.addressRepository.save(address)
    }

    async findAddressById(id: number): Promise<Address> {
        return this.addressRepository.findOne({
            where: { id: id },
            relations: ['city', 'person'],
        });
    }

    async updateById(id: number, updateData: UpdateAddressDTO): Promise<Address> {
        const address = await this.addressRepository.findOneBy({id:id});
        if (!address) {
            throw new NotFoundException('Address not found!');
        }
        const updatedAddress = Object.assign(address, updateData);
        return this.addressRepository.save(updatedAddress);
    }
    
    async updateAddressById(id: number, updateData: Partial<UpdateAddressDTO>): Promise<Address> {
        const address = await this.addressRepository.findOneBy({id:id});
        if (!address) {
            throw new NotFoundException('Address not found!');
        }
        const updatedAddress = Object.assign(address, updateData);
        return this.addressRepository.save(updatedAddress);
    }

    async deleteById(id: number): Promise<void> {
        const address = await this.addressRepository.findOneBy({id:id});
        if (!address) {
          throw new NotFoundException('Address not found!');
        }
        await this.addressRepository.delete(id);
    }
    
}
