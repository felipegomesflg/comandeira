import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloorplanPage } from './floorplan';

@NgModule({
  declarations: [
    FloorplanPage,
  ],
  imports: [
    IonicPageModule.forChild(FloorplanPage),
  ],
})
export class FloorplanPageModule {}
