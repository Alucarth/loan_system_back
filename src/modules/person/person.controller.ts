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
  Res,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePersonDto, UpdatePersonDto } from './create-person.dto';
import { PersonService } from './person.service';
import { ApiTags } from '@nestjs/swagger';
import { AddressService } from '../address/address.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilter, fileName } from 'src/helpers/files.utils';
import { join } from 'path';
@UseGuards(JwtAuthGuard)
@ApiTags('Person')
@Controller('person')
export class PersonController {
  constructor(
    private readonly _personService: PersonService,
  ) {}

  @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Person[]> {
      return this._personService.findAll();
    }

  // @Get('clients')
  // @HttpCode(HttpStatus.OK)
  // async findAllClients() {
  //   return await this._personService.findAllClients();
  // }

  @Get(':id')
    @HttpCode(HttpStatus.OK)
    findPersonById(@Param('id', ParseIntPipe) id: number) {
      return this._personService.findPersonById(id);
    }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() personData: CreatePersonDto, @Request() req: any) {
    console.log('personData aaaaaaaaaa', personData);
    const person = await this._personService.create(personData, req.user);
    return person;
  }

  // @Get('references/:client_id')
  // @HttpCode(HttpStatus.OK)
  // async findReferencesByClientId(
  //   @Param('client_id', ParseIntPipe) client_id: number,
  // ) {
  //   return this._personService.findReferences(client_id);
  // }

  // @Post('reference')
  // @HttpCode(HttpStatus.CREATED)
  // async createReference(@Body() personArray: any[]) {
  //   console.log('array person', personArray);
  //   personArray.forEach(async (person: CreatePersonDto) => {
  //     await this._personService.create(person);
  //   });
  //   // aqui devolver array con lo guardado tarea para el pasante jajaja
  //   return 'person reference register';
  // }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdatePersonDto,
    @Request() req: any,
  ) {
    console.log('personData update', updateData);
    return this._personService.updateById(id, updateData, req.user);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updatePersonById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<UpdatePersonDto>,
  ) {
    return this._personService.updatePersonById(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this._personService.deleteById(id);
  }
  // @Get('/download/:id')
  // async getFile(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Request() req: any,
  // ): Promise<StreamableFile> {
  //   const person = await this._personService.findByPublicId(id, req.user);
  //   console.log(person);
  //   console.log(join(process.cwd() + `${person.photo_url}`));
  //   const file = createReadStream(join(process.cwd(), `${person.photo_url}`));
  //   return new StreamableFile(file);
  // }

  @Get('download/:id')
  async downloadFile(
    @Res() res,
    @Param('id', ParseIntPipe) id: number,
    @Request() req: any,
  ) {
    //  const data = await this.institucionEducativaImagenService.getOneActivoBySieId(id);
    const person = await this._personService.findByPublicId(id, req.user);
    res.download(`${join(process.cwd())}/${person.photo_url}`);
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: fileName,
      }),
      fileFilter: fileFilter,
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('file: ', file);
    return file;
    // try {
    //   return this.response.status200({
    //     data: { file: file, message: 'Archivo Registrado !' },
    //   });
    // } catch (e) {
    //   return this.response.status500({});
    // }
  }
}
