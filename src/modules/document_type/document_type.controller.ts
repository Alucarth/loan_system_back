import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DocumentTypeService } from './document_type.service';

@ApiTags('Document Type')
@UseGuards(JwtAuthGuard)
@Controller('document_type')
export class DocuemntTypeController {
  constructor(private readonly _documentTypeService: DocumentTypeService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Request() req: any) {
    return this._documentTypeService.findAll(req.user);
  }
}
