import {ViewController} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
  selector: 'my-form',
  templateUrl: 'form.html'
})
export class MyFormComponent {
  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
      this.viewCtrl.dismiss();
  }
}
