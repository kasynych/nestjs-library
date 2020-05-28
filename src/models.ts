import { ApiProperty } from '@nestjs/swagger';

class DbDocument {
  createdAt: string;
  updatedAt: string;

  constructor(document: any) {
    this.createdAt = document.createdAt || new Date().toString();
    this.updatedAt = new Date().toString();
  }
}

export class Author extends DbDocument {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  birthDay: string;

  constructor(author: any) {
    super(author);
    this.firstName = author.firstName || '';
    this.lastName = author.lastName || '';
    this.birthDay = author.birthDay || '';
  }
}

export class Book extends DbDocument {
  @ApiProperty()
  title: string;
  @ApiProperty()
  author: Author;
  @ApiProperty()
  iban: string;
  @ApiProperty()
  publishedAt: string

  constructor(book: any) {
    super(book);
    this.title = book.title || '';
    this.author = book.author || new Author({});
    this.iban = book.iban || '';
    this.publishedAt = book.publishedAt || '';
  }
}
