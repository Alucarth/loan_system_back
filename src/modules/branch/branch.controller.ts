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
import { CreateBranchDto, UpdateBranchDto } from './branch.dto';
import { BranchService } from './branch.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Branch')
@UseGuards(JwtAuthGuard)
@Controller('branch')
export class BranchController {
  constructor(private readonly _branchService: BranchService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Request() req) {
    console.log(req.user);
    return this._branchService.findAll(req);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() branchData: CreateBranchDto) {
    console.log('branchData', branchData);
    const response = await this._branchService.create(branchData);
    return response;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findAccountById(@Request() req, @Param('id', ParseIntPipe) id: number) {
    return this._branchService.findBranchById(req, id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateBranchDto,
  ) {
    return this._branchService.updateById(id, updateData);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateAccountById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<UpdateBranchDto>,
  ) {
    return this._branchService.updateBranchById(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this._branchService.deleteById(id);
  }
}
