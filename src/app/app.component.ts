import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalStorageService } from "angular-2-local-storage";

import { HomePage } from '../pages/home/home';
import { FloorplanPage  } from '../pages/floorplan/floorplan';
import { StandbyPage } from '../pages/standby/standby';

import { DataService } from "./services/data.service";
import { ComumService} from './services/comum.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private dataService: DataService,private localStorage: LocalStorageService,private comumService:ComumService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'FloorPlan', component: FloorplanPage }
    ];

  }

  initializeApp() {
    this.comumService.loading = 'Aguarde, o sistema está carregando informações...';
    let maquina = this.localStorage.get('maquina');
    let token = this.localStorage.get('token');
    let funcionario = this.localStorage.get('funcionario');
    if(maquina && token){
      let obj = {"maquina":maquina,"token":token};
      this.dataService.addEntity(obj,'maquina/getauth').subscribe(val=>{
        if(val.success){
          this.rootPage = StandbyPage;
          if(funcionario){
          let obj = {"idcode":funcionario};
          this.dataService.addEntity(obj,'funcionario/autenticar').subscribe(val=>{
            if(val.success)
              this.rootPage = FloorplanPage;
              this.comumService.loading = '';//para loader
          })
          }else
            this.comumService.loading = '';//para loader
        }else
          this.comumService.loading = '';//para loader
      })
    }else
      this.comumService.loading = '';//para loader

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
