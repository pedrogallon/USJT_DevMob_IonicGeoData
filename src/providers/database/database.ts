
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public db: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  openDatabase() {
    return this.db.create({
      name: "pais.db",
      location: "default"
    });
  }

  createDatabase() {
    return this.openDatabase().
      then((db: SQLiteObject) => {
        this.createTabelaPaises(db);
      });
  }
  createTabelaPaises(db: SQLiteObject) {
    let sql: string = "CREATE TABLE IF NOT EXISTS pais (name VARCHAR(200), region VARCHAR(200), capital VARCHAR(200), area LONG, alpha3Code VARCHAR(10))";
    db.executeSql(sql, {});
  }
}
