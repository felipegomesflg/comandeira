import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FloorplanPage,MesaModal } from '../pages/floorplan/floorplan';
import { StandbyPage } from '../pages/standby/standby';
import { ChoosePage } from '../pages/choose/choose';

import { DataService } from './services/data.service';
import { ComumService } from './services/comum.service';

import{HeaderComponent} from '../components/header/header'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FloorplanPage,
    MesaModal,
    StandbyPage,
    ChoosePage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    LocalStorageModule.withConfig({
      prefix: 'mdc-comandeira',
      storageType: 'localStorage'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FloorplanPage,
    MesaModal,
    StandbyPage,
    ChoosePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    ComumService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
