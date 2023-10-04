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
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
// import { Account } from 'src/modules/account/account.entity';
import { CreateAccountDto, UpdateAccountDto } from './account.dto';
import { AccountService } from './account.service';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(private readonly _accountService: AccountService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this._accountService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() accountData: CreateAccountDto) {
    console.log('acountData', accountData);
    const response = await this._accountService.create(accountData);
    return response;
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findAccountById(@Param('id', ParseIntPipe) id: number) {
    return this._accountService.findAccountById(id);
  }
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateAccountDto,
  ) {
    return this._accountService.updateById(id, updateData);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateAccountById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<UpdateAccountDto>,
  ) {
    return this._accountService.updateAccountById(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this._accountService.deleteById(id);
  }
}
