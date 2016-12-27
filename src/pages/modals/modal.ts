import { MyFormComponent } from './form/form';
import {ModalController} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
  selector: 'page-modals',
  templateUrl: 'modal.html'
})
export class ModalsExample {
  constructor(public modalCtrl: ModalController) {

  }

  presentModal() {
    let modal = this.modalCtrl.create(MyFormComponent);
    modal.present();
  }
}
