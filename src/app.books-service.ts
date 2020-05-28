import { Author, Book} from './models';
import MongodbClient from './mongodb-client';

export class BooksService {
  private collection: any;

  constructor() {
    MongodbClient.connect().then(() => this.collection = MongodbClient.db.collection('books'));
  }

  public addBook(book: any): Promise<any> {
    return this.collection.insertOne(new Book(book))
  }

  public getBooks(author: Author): Promise<Book[]> {
    return this.collection.find({'author.firstName': author.firstName, 'author.lastName': author.lastName}).toArray();
  }

  public getBook(iban: string): Promise<Book> {
    return this.collection.findOne({"iban": iban});
  }

  public updateBook(book: any): Promise<any> {
    return this.collection.updateOne({"iban": book.iban}, {$set: new Book(book)});
  }

  public deleteBook(iban: string): Promise<any> {
    return this.collection.deleteOne({"iban": iban});
  }

}
