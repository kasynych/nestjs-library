
export default class MongodbClient {
  static db: any;
  static connect(): Promise<any> {
    return new Promise((resolve) => {
      const MongoClient = require('mongodb').MongoClient;

      MongoClient.connect('mongodb+srv://admin:dKLvQe@cluster0-zq8p9.mongodb.net/test?retryWrites=true&w=majority', function (err, client) {
        if (!!err) {
          throw new Error(err);
        }
        MongodbClient.db = client.db('library');
        resolve();
      });
    });
  }
}
