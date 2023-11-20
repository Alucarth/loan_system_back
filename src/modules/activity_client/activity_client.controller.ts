import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateActivityClientDTO } from './activity_client.dto';
import { ActivityClientService } from './activity_clilent.service';

@ApiTags('ActivityClient')
@UseGuards(JwtAuthGuard)
@Controller('activity_client')
export class AddressController {
  constructor(
    private readonly _acitivityClientService: ActivityClientService,
  ) {}

  @Get(':client_id')
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Param('client_id', ParseIntPipe) client_id: number,
    @Request() req: any,
  ) {
    return this._acitivityClientService.findAll(client_id, req.user);
  }

  // conflicto con findAll y en service esta de tipo any person_id

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() payload: CreateActivityClientDTO, @Request() req: any) {
    // console.log('acountData', payload);
    const response = await this._acitivityClientService.create(
      payload,
      req.user,
    );
    return response;
  }

  /*
      //no hay ocupation dentro de Address
      // no existe data dentro de CreateAddressDTO
      @Post()
      @HttpCode(HttpStatus.CREATED)
      @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
      @ApiResponse({ status: 403, description: 'Forbidden.'})
      async create(@Body() addressArray: any)
      {
          console.log('address',addressArray)
          await Promise.all(
              addressArray.map(async (address_row:CreateAddressDTO)=>{
                  let address: any =  await this._acitivityClientService.create(address_row)
                  
                  console.log('address',address) 
                  await Promise.all(
                      address_row.ocupations.map( async( ocupation:any)=>{
                          let ocupation_payload:CreateOcupationDto = ocupation
                          ocupation_payload.address_id = address.id
                          console.log('ocupation',ocupation_payload)
                          await this._ocupationService.create(ocupation_payload)
                      })
                  )
              })
          )
  
          // addressArray.forEach(async (address_row:any) => {
          //     let response: any =  await this._acitivityClientService.create(address_row)
          //     let address = response.data
          //     address_row.ocupations.forEach(async (ocupation: any) => {
                 
          //     });
          // })
          // aqui devolver array con lo guardado tarea para el pasante jajaja
          return 'addresses created'
      }*/

  //   @Get(':id')
  //   @HttpCode(HttpStatus.OK)
  //   findAddressById(@Param('id', ParseIntPipe) id: number, @Request() req: any) {
  //     return this._acitivityClientService.findAddressById(id, req.user);
  //   }
  // @Put(':id')
  // @HttpCode(HttpStatus.OK)
  // async updateById(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateData: UpdateAddressDTO,
  // ) {
  //   return this._acitivityClientService.updateById(id, updateData);
  // }

  // @Patch(':id')
  // @HttpCode(HttpStatus.OK)
  // async updateAddressById(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateData: Partial<UpdateAddressDTO>,
  // ) {
  //   return this._acitivityClientService.updateAddressById(id, updateData);
  // }

  // @Delete(':id')
  // @HttpCode(HttpStatus.OK)
  // async deleteById(@Param('id', ParseIntPipe) id: number) {
  //   return this._acitivityClientService.deleteById(id);
  // }
}
