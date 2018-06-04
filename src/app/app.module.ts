import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaPageModule } from '../pages/lista/lista.module';
import { PaisPageModule } from '../pages/pais/pais.module';
import { PaisProvider } from '../providers/pais/pais';
import { HttpModule } from '@angular/http';

import {SQLite} from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { PaisDbProvider } from '../providers/pais-db/pais-db';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ListaPageModule,
    PaisPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaisProvider,
    SQLite,
    DatabaseProvider,
    PaisDbProvider
  ]
})
export class AppModule {}
