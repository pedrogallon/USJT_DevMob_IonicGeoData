
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Pais } from '../../model/pais';

/*
  Generated class for the PaisDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisDbProvider {

  constructor(public dbProvider: DatabaseProvider) {
    console.log('Hello PaisDbProvider Provider');
  }

  public insert(pais: Pais) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {

        let sql = "INSERT INTO pais (name, region, capital, alpha3Code, area) VALUES (?, ?, ?, ?, ?)";
        let parametros = [pais.name, pais.region, pais.capital, pais.alpha3Code, pais.area];
        return db.executeSql(sql, parametros).catch((e) => {
          console.log(e);
        });

      }).catch((e) => {
        console.log(e);
      });
  }

  public listar() {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "SELECT * FROM pais";
        return db.executeSql(sql, []).
          then((data: any) => {
            if (data.rows.length > 0) {
              let paises: Pais[] = [];
              for (let i = 0; i < data.rows.length; i++) {
                paises.push(data.rows.item(i));
              }
              return paises;
            }
            else
              return [];
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public isEmpty() {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "SELECT * FROM pais";
        return db.executeSql(sql, []).
          then((data: any) => {
            if (data.rows.length > 0) {
              console.log(data.rows.item(0).region);
              return false;
            }
            else
              return true;
          });
      }).catch((e) => {
        console.log(e);
      });
  }

}
