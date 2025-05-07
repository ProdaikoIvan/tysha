import { Test, TestingModule } from '@nestjs/testing';
import { GoogleServiceController } from './google.controller';

describe('GoogleServiceController', () => {
  let controller: GoogleServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleServiceController],
    }).compile();

    controller = module.get<GoogleServiceController>(GoogleServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
