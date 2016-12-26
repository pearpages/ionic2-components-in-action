import {LoadingController} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingExample {
  constructor(public loadingCtrl: LoadingController) {

  }

  presentLoading() {
      let loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 3000
      });
      loader.present();
  }
}
