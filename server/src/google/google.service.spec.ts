import { Test, TestingModule } from '@nestjs/testing';
import { GoogleService } from './google.service';
import { SheetsService } from './sheet/sheet.service';

describe('GoogleServiceService', () => {
  let service: GoogleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleService, SheetsService],
    }).compile();

    service = module.get<GoogleService>(GoogleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
