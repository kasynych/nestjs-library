import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, HttpStatus } from '@nestjs/common';
import { RoutingService } from './app.routing-service';
import { Author, Book } from './models';

@Controller()
export class AppController {
  constructor(private readonly routingService: RoutingService) {}

  @Get('/authors')
  async getAuthors(): Promise<Author[]> {
    const authors: Author[] = await this.routingService.getAuthors();
    if (authors) {
      return authors;
    } else {
      throw new NotFoundException();
    }
  }

  @Get('author/:firstName/:lastName')
  async getAuthor(@Param() params): Promise<Author> {
    const author: Author = await this.routingService.getAuthor(params.firstName, params.lastName);
    if (author) {
      return author;
    } else {
      throw new NotFoundException();
    }
  }

  @Post('author')
  async addAuthor(@Body() body: Author): Promise<string> {
    return await this.routingService.addAuthor(body).then(() => "Author was added");
  }

  @Put('author')
  async updateAuthor(@Body() body: Author): Promise<string> {
    return await this.routingService.updateAuthor(body).then(() => "Author was updated");
  }

  @Delete('author/:firstName/:lastName')
  async deleteAuthor(@Param() params): Promise<any> {
    return await this.routingService.deleteAuthor(params.firstName, params.lastName).then(() => "Author was deleted");
  }

  @Get('/books')
  async getBooks(@Body() body: Author): Promise<Book[]> {
    const books: Book[] = await this.routingService.getBooks(body);
    if (books && books.length) {
      return books;
    } else {
      throw new NotFoundException();
    }
  }

  @Get('book/:iban')
  async getBook(@Param() params): Promise<Book> {
    const book: Book = await this.routingService.getBook(params.iban);
    if (book) {
      return book;
    } else {
      throw new NotFoundException();
    }
  }

  @Post('book')
  async addBook(@Body() body: Book): Promise<string> {
    return await this.routingService.addBook(body).then(() => "Book was added");
  }

  @Put('book')
  async updateBook(@Body() body: Book): Promise<string> {
    return await this.routingService.updateBook(body).then(() => "Book was updated");
  }

  @Delete('book/:iban')
  async deleteBook(@Param() params): Promise<any> {
    return await this.routingService.deleteBook(params.iban).then(() => "Book was deleted");
  }
}
