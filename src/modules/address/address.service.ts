import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Address } from 'src/modules/address/address.entity';

import { Person } from 'src/modules/person/person.entity';
import { City } from 'src/modules/city/city.entity';
import { CreateAddressDTO, UpdateAddressDTO } from './address.dto';
import { RequestUserDto } from '../user/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async findAllPersonId(
    person_id: number,
    user: RequestUserDto,
  ): Promise<Address[]> {
    return await this.addressRepository.find({
      where: {
        person: {
          public_id: person_id,
          account_id: user.account_id,
        },
      },
    });
  }

  // async findAll(): Promise<Address[]> {
  //   return this.addressRepository.find({ relations: ['city', 'person'] });
  // }

  async create(
    address_dto: CreateAddressDTO,
    user: RequestUserDto,
  ): Promise<Address> {
    // Buscar entidades relacionadas
    const city: City = await this.cityRepository.findOneBy({
      id: address_dto.city_id,
    });
    const person: Person = await this.personRepository.findOneBy({
      id: address_dto.person_id,
    });

    // Crear una nueva entidad Address y rellenar sus propiedades
    const address = new Address();

    address.address = address_dto.address;
    // address.address_type = address_dto.address_type;
    address.comments = address_dto.comments;
    address.phone_number = address_dto.phone_number;
    address.zone = address_dto.zone;
    // address.status = address_dto.status;
    // address.property = address_dto.property;
    address.city = city;
    address.person = person;
    address.public_id = 0;
    address.account_id = user.account_id;
    address.user_id = user.user_id;

    // Save the new Address entity to the database
    return await this.addressRepository.save(address);
  }

  async findAddressById(id: number, user: RequestUserDto): Promise<Address> {
    return this.addressRepository.findOne({
      where: { public_id: id, account_id: user.account_id },
      // relations: ['city', 'person'], //no devolver persona por que se supone que quien hace la llamada de este metodo es una persona con direccion
    });
  }

  // async updateById(id: number, updateData: UpdateAddressDTO): Promise<Address> {
  //   const address = await this.addressRepository.findOneBy({ id: id });
  //   if (!address) {
  //     throw new NotFoundException('Address not found!');
  //   }
  //   const updatedAddress = Object.assign(address, updateData);
  //   return this.addressRepository.save(updatedAddress);
  // }

  // async updateAddressById(
  //   id: number,
  //   updateData: Partial<UpdateAddressDTO>,
  // ): Promise<Address> {
  //   const address = await this.addressRepository.findOneBy({ id: id });
  //   if (!address) {
  //     throw new NotFoundException('Address not found!');
  //   }
  //   const updatedAddress = Object.assign(address, updateData);
  //   return this.addressRepository.save(updatedAddress);
  // }

  // async deleteById(id: number): Promise<void> {
  //   const address = await this.addressRepository.findOneBy({ id: id });
  //   if (!address) {
  //     throw new NotFoundException('Address not found!');
  //   }
  //   await this.addressRepository.delete(id);
  // }
}
