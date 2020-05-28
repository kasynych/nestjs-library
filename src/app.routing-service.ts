import { Injectable } from '@nestjs/common';
import { AuthorsService } from './app.authors-service';
import { BooksService } from './app.books-service';
import { Author, Book } from './models';

@Injectable()
export class RoutingService {

constructor(private authorsService: AuthorsService,
            private booksService: BooksService) {}

  getAuthors(): Promise<Author[]> {
    return this.authorsService.getAuthors();
  }

  getAuthor(firstName: string, lastName: string): Promise<Author> {
    return this.authorsService.getAuthor(firstName, lastName);
  }

  addAuthor(author: any): any {
    return this.authorsService.addAuthor(author);
  }

  updateAuthor(author: any): Promise<any> {
    return this.authorsService.updateAuthor(author);
  }

  deleteAuthor(firstName: string, lastName: string): Promise<any> {
    return this.authorsService.deleteAuthor(firstName, lastName);
  }

  getBooks(author: Author): Promise<Book[]> {
    return this.booksService.getBooks(author);
  }

  getBook(iban: string): Promise<Book> {
    return this.booksService.getBook(iban);
  }

  addBook(book: any): any {
    return this.booksService.addBook(book);
  }

  updateBook(book: any): Promise<any> {
    return this.booksService.updateBook(book);
  }

  deleteBook(iban: string): Promise<any> {
    return this.booksService.deleteBook(iban);
  }
}
