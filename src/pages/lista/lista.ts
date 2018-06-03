import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';
import { PaisPage } from '../pais/pais';
import { PaisProvider } from '../../providers/pais/pais';

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
  providers: [PaisProvider]
})
export class ListaPage {
  public paises = new Array<any>();
  regiao: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider: PaisProvider) {
    this.regiao = navParams.get("regiao");
    
    
  }

  ionViewDidLoad() {
    if (this.regiao == "Todos"){
      this.paisProvider.getAllCoyntries().subscribe(
        data =>{
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.paises = objeto_retorno;
          console.log(this.paises)
        }, error =>{
          console.log(error)
        }
      );
    }else{
      this.paisProvider.getContriesByRegion(this.regiao).subscribe(
        data =>{
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.paises = objeto_retorno;
          
        }, error =>{
          console.log(error)
        }
      );

    }
  }

  public visualizarPais(pais :Pais){
    this.navCtrl.push(PaisPage, {pais});
  }



}
