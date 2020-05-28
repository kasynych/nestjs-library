import { Author } from './models';
import MongodbClient from './mongodb-client';

export class AuthorsService {
  private collection: any;

  constructor() {
    MongodbClient.connect().then(() => this.collection = MongodbClient.db.collection('authors'));
  }

  public addAuthor(author: any): Promise<any> {
    return this.collection.insertOne(new Author(author))
  }

  public getAuthors(): Promise<Author[]> {
    return this.collection.find({}).toArray();
  }

  public getAuthor(firstName: string, lastName: string): Promise<Author> {
    return this.collection.findOne({"firstName": firstName, "lastName": lastName});
  }

  public updateAuthor(author: any): Promise<any> {
    return this.collection.updateOne({"firstName": author.firstName, "lastName": author.lastName}, {$set: new Author(author)});
  }

  public deleteAuthor(firstName: string, lastName: string): Promise<any> {
    return this.collection.deleteOne({"firstName": firstName, "lastName": lastName});
  }
}
