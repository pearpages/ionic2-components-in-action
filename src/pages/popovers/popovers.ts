import { PopoverExample } from './popover-example';
import {PopoverController} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
  selector: 'page-popovers',
  templateUrl: 'popovers.html'
})
export class PopoversExample {
  constructor(private popoverCtrl: PopoverController) {

  }

  showPopover() {
    let popover = this.popoverCtrl.create(PopoverExample);

    popover.present();
  }
}
