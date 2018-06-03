import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the PaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisProvider {

  constructor(public http: Http) {
    
  }

  getAllCoyntries(){
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }

  getContriesByRegion(region: String){
    return this.http.get("https://restcountries.eu/rest/v2/region/"+region.toLowerCase())
  }

}
