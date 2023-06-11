import { Test, TestingModule } from '@nestjs/testing';
import { PersonTypeController } from './person_type.controller';

describe('PersonTypeController', () => {
  let controller: PersonTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonTypeController],
    }).compile();

    controller = module.get<PersonTypeController>(PersonTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
