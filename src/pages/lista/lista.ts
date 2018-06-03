import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';
import { PaisPage } from '../pais/pais';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  paises : Pais[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.paises = navParams.get("paises");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  // public visualizarPais(pais :Pais){
  //   this.navCtrl.push(PaisPage, {pais});
  // }

  public visualizarPais(){
    this.navCtrl.push(PaisPage);
  }

}
