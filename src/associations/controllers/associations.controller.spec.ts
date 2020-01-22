import { Test, TestingModule } from '@nestjs/testing';
import { AssociationsController } from './associations.controller';

describe('Associations Controller', () => {
  let controller: AssociationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociationsController],
    }).compile();

    controller = module.get<AssociationsController>(AssociationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
