import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { RoutingService } from './app.routing-service';
import { AuthorsService } from './app.authors-service';
import { BooksService } from './app.books-service';
import MongodbClient from './mongodb-client';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [RoutingService, AuthorsService, BooksService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('getAuthors()', () => {
      expect(appController.getAuthors).toBeTruthy();
    });
  });
});
