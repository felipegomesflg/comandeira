import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { LocalStorageService } from "angular-2-local-storage";

import {FloorplanPage  } from '../floorplan/floorplan';
import { DataService } from "../../app/services/data.service";

/**
 * Generated class for the StandbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standby',
  templateUrl: 'standby.html',
})
export class StandbyPage {
  objAuth :any = {idcode:''};
  constructor(public navCtrl: NavController,private dataService: DataService, private localStorage:LocalStorageService) {

  }

  autenticar(){
   
  this.dataService.addEntity(this.objAuth,'funcionario/autenticar').subscribe(val=>{
    if(val.success){
      this.localStorage.set('funcionario',this.objAuth.idcode);
      this.navCtrl.setRoot(FloorplanPage);
    }else
    alert("Matrícula Inválida");
  })
  }


}
