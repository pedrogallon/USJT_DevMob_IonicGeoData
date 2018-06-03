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

  }

  public ngOnInit() {
    this.regiao = "Todos";
  }

  public submit() {
    var regiao = this.regiao;
    this.navCtrl.push(ListaPage, {regiao });
  }


}
