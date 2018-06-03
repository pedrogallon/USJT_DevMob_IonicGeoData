import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';

/**
 * Generated class for the PaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pais',
  templateUrl: 'pais.html',
})
export class PaisPage {
  pais :Pais;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pais = this.navParams.get("pais");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisPage');
  }

}
