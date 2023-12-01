import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RelationshipService } from './relationship.service';
import { CreateRelationshipDTO } from './relationship.dto';

@ApiTags('Relationship')
@UseGuards(JwtAuthGuard)
@Controller('relationship')
export class RelationshipController {
  constructor(private readonly _relationshipService: RelationshipService) {}

  @Get()
  async findAll(@Request() req: any) {
    return this._relationshipService.findAll(req.user);
  }

  @Post()
  async create(
    @Body() RelationshipData: CreateRelationshipDTO,
    @Request() req: any,
  ) {
    console.log(RelationshipData);
    return await this._relationshipService.create(RelationshipData, req.user);
  }
}
