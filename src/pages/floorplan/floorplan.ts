import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, Platform, ViewController } from 'ionic-angular';
import { DataService } from "../../app/services/data.service";



/**
 * Generated class for the FloorplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-floorplan',
  templateUrl: 'floorplan.html',
})
export class FloorplanPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dataService:DataService,
    public modalCtrl: ModalController) {
  }
  floorPlan:any[] = [];

  ionViewDidLoad() {
    this.dataService.getList('floorplan').subscribe(val=>{
      this.floorPlan = val;
    });
  }

  addMesa(){
    const modal = this.modalCtrl.create(MesaModal);
    modal.present();
  }

}


@Component({
  selector: 'modal-mesa',
  template: `
      <ion-header>
      <ion-toolbar>
        <ion-title>
          Abrir Mesa
        </ion-title>
        <ion-buttons start>
          <button ion-button (click)="dismiss()">
            <span ion-text color="primary" showWhen="ios">Cancel</span>
            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>

    <ion-list>

  <ion-item>
      <ion-label floating>Mesa</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label floating>Ocupante(s)</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label floating>Nome do Cliente</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>

    

  </ion-list>
  <div padding>
      <button ion-button color="primary" block>Confirmar</button>
    </div>
     
    </ion-content>
  `,
})
export class MesaModal {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

}

