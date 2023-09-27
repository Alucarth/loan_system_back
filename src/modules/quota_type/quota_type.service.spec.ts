import { Test, TestingModule } from '@nestjs/testing';
import { QuotaTypeService } from './quota_type.service';

describe('QuotaTypeService', () => {
  let service: QuotaTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotaTypeService],
    }).compile();

    service = module.get<QuotaTypeService>(QuotaTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
