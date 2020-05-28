import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RoutingService } from './app.routing-service';
import { AuthorsService } from './app.authors-service';
import { BooksService } from './app.books-service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [RoutingService, AuthorsService, BooksService],
})
export class AppModule {}
