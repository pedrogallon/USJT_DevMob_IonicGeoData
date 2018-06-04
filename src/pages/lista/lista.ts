import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Pais } from '../../model/pais';
import { PaisPage } from '../pais/pais';
import { PaisProvider } from '../../providers/pais/pais';
import { PaisDbProvider } from '../../providers/pais-db/pais-db';

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
  providers: [PaisProvider, PaisDbProvider]
})
export class ListaPage {
  public paises: Pais[];
  regiao: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider: PaisProvider, public paisDbProvider: PaisDbProvider) {
    this.regiao = navParams.get("regiao");


  }



  ionViewDidLoad() {
    this.paisDbProvider.listar().
    then((paises: Pais[]) => {
      this.paises = paises;
    });
    // var vazio = this.paisDbProvider.isEmpty();
    if (typeof this.paises != "undefined") {
      console.log("SQLite preenchido, usando dados locais")
      if (this.regiao != "Todos") {
        var newPaises = new Array();
        for (let p of this.paises) {
          if (p.region == this.regiao) {
            newPaises.push(p);
          }
        }
        this.paises = newPaises;
      }
    } else {
      console.log("SQLite vazio, preencherá se for Todos")
      if (this.regiao == "Todos") {
        console.log("É Todos, vai preencher")
        this.paisProvider.getAllCoyntries().subscribe(
          data => {
            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);
            this.paises = objeto_retorno;
            for (let pais of this.paises) {
              this.paisDbProvider.insert(pais);
            }
          }, error => {
            console.log(error)
          }
        );
      } else {
        console.log("Não é todos, não vai preencher");
        this.paisProvider.getContriesByRegion(this.regiao).subscribe(
          data => {
            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);
            this.paises = objeto_retorno;
          }, error => {
            console.log(error)
          }
        );

      }
    }
  }

  public visualizarPais(pais: Pais) {
    this.navCtrl.push(PaisPage, { pais });
  }



}
