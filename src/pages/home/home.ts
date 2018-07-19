import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocalStorageService } from "angular-2-local-storage";
import { StandbyPage } from '../standby/standby';
import { DataService } from "../../app/services/data.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  objAuth :any = {codMaquina:'gomesmesa',codChave:'21975486000153'};
  constructor(public navCtrl: NavController,private dataService: DataService, private localStorage: LocalStorageService) {

  }

  autenticar(){
      if (this.objAuth.codMaquina == "" || this.objAuth.codChave == ""){
        alert("Nome da máquina e código precisam ser preenchidos corretamente!");
        return false;
    }
   
    var obj = {
        "maquina": this.objAuth.codMaquina,
        "cnpj": this.objAuth.codChave
    }
    this.dataService.addEntity(obj,'maquina/autenticar').subscribe(val=>{
      if(val.success){
        this.localStorage.set('maquina',this.objAuth.codMaquina);
        this.localStorage.set('token',val.data.token.toUpperCase());
        this.navCtrl.setRoot(StandbyPage);
      }else
      alert("Nome de máquina e/ou chave não confere(m)");
    })
  }

 

}
