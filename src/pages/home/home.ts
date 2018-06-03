import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { Pais } from '../../model/pais';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public paises: Pais[];
  regiao: any;

  constructor(public navCtrl: NavController) {
  //   var p1 = { name: "Brasil", alpha3Code: "BRA", capital: "Brasilia", region: "Americas", area: 12345 };
  //   var p2 = { name: "Argentina", alpha3Code: "ARG", capital: "Buenos Aires", region: "Americas", area: 12333 };

  //   var p3 = { name: "Australia", alpha3Code: "AUS", capital: "Canberra", region: "Oceania", area: 12345 };
  //   var p4 = { name: "Fiji", alpha3Code: "FJI", capital: "Suva", region: "Oceania", area: 12345 };

  //   var p5 = { name: "Gabon", alpha3Code: "GAB", capital: "Libreville", region: "Africa", area: 12345 };
  //   var p6 = { name: "Gambia", alpha3Code: "GMB", capital: "Bionjul", region: "Africa", area: 12345 };

  //   var p7 = { name: "Georgia", alpha3Code: "GEO", capital: "Tibillis", region: "Asia", area: 12345 };
  //   var p8 = { name: "Hong Kong", alpha3Code: "HKG", capital: "Victoria", region: "Asia", area: 12345 };

  //   var p9 = { name: "Germany", alpha3Code: "DEU", capital: "Berlin", region: "Europe", area: 12345 };
  //   var p0 = { name: "France", alpha3Code: "FRA", capital: "Paris", region: "Europe", area: 12345 };

  //   this.paises = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p0];

  }

  public ngOnInit() {
    this.regiao = "Todos";
  }

  // public submit() {
  //   var paises = new Array();

  //   if (this.regiao == "Todos") {
  //     paises = this.paises;
  //     this.navCtrl.push(ListaPage, { paises });
  //   } else {
  //     for (var p of this.paises) {
  //       if (p.region === this.regiao) {
  //         paises.push(p);
  //       }
  //     }
  //     this.navCtrl.push(ListaPage, { paises });
  //   }
  // }
  public submit() {

    this.navCtrl.push(ListaPage);

  }

}
