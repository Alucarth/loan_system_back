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
  async findAll(@Request() req: any) {
    return this._branchService.findAll(req.user);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() branchData: CreateBranchDto, @Request() req: any) {
    return await this._branchService.create(branchData, req);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findAccountById(@Request() req, @Param('id', ParseIntPipe) id: number) {
    return this._branchService.findBranchById(id, req.user);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateBranchDto,
    @Request() req: any,
  ) {
    return this._branchService.updateById(id, updateData, req.user);
  }

  /*@Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id', ParseIntPipe) id: number, @Request() req: any) {
    return this._branchService.deleteById(id, req.user);
  }*/
  // softDelete
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async softDeleteById(@Param('id', ParseIntPipe) id: number, @Request() req: any) {
    return this._branchService.softDeleteById(id, req.user);
  }
}
